// src/pages/Admin/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { FaFileExcel, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
// Importamos nuestros nuevos servicios
import { mangaService, authorService, categoryService } from '../../services/api';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // Estado del formulario
  const [newProduct, setNewProduct] = useState({ 
    title: '', 
    price: '', 
    stock: '', 
    authorId: '', 
    categoryId: '',
    imageUrl: ''
  });

  // 1. Cargar datos reales al iniciar
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Cargamos todo en paralelo
      const [mangasData, authorsData, catsData] = await Promise.all([
        mangaService.getAll(),
        authorService.getAll(),
        categoryService.getAll()
      ]);

      if (mangasData) setProducts(mangasData);
      if (authorsData) setAuthors(authorsData);
      if (catsData) setCategories(catsData);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      // Enviamos al backend .NET
      await mangaService.create({
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        // Asegúrate de enviar los IDs como números si tu backend lo pide
        authorId: parseInt(newProduct.authorId),
        categoryId: parseInt(newProduct.categoryId)
      });
      
      alert("¡Manga creado exitosamente!");
      loadData(); // Recargar la tabla
      
      // Limpiar form
      setNewProduct({ title: '', price: '', stock: '', authorId: '', categoryId: '', imageUrl: '' });
    } catch (error) {
      alert("Error al crear manga");
    }
  };

  const handleExportExcel = () => {
    // Usamos la nueva función del servicio
    mangaService.exportExcel();
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">PANEL DE ADMINISTRACIÓN</h1>
        <button className="btn-export" onClick={handleExportExcel}>
          <FaFileExcel /> Exportar Reporte
        </button>
      </div>

      {/* FORMULARIO DE AGREGAR */}
      <div className="admin-form-card">
        <h3><FaPlus /> Agregar Nuevo Manga</h3>
        <form onSubmit={handleAddProduct}>
          <div className="form-row">
            <input 
              type="text" 
              name="title" 
              placeholder="Título del Manga" 
              className="admin-input" 
              value={newProduct.title}
              onChange={handleInputChange}
              required
            />
            <input 
              type="number" 
              name="price" 
              placeholder="Precio (S/)" 
              className="admin-input" 
              value={newProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-row">
            {/* SELECTOR DE AUTORES (Desde BD) */}
            <select 
              name="authorId" 
              className="admin-input"
              value={newProduct.authorId}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar Autor</option>
              {authors.map(auth => (
                <option key={auth.id} value={auth.id}>{auth.name}</option>
              ))}
            </select>

            {/* SELECTOR DE CATEGORÍAS (Desde BD) */}
            <select 
              name="categoryId" 
              className="admin-input"
              value={newProduct.categoryId}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar Categoría</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <input 
              type="number" 
              name="stock" 
              placeholder="Stock Inicial" 
              className="admin-input"
              value={newProduct.stock}
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="imageUrl"
              placeholder="URL de Imagen" 
              className="admin-input"
              value={newProduct.imageUrl}
              onChange={handleInputChange} 
            />
          </div>
          <button type="submit" className="btn-save">GUARDAR PRODUCTO</button>
        </form>
      </div>

      {/* TABLA DE PRODUCTOS (Datos Reales) */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>S/ {product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="btn-action btn-edit"><FaEdit /></button>
                <button className="btn-action btn-delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;