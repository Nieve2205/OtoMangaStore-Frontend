import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Asegúrate de copiar el CSS de Login aquí

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log('Register intent:', formData);
    // Conectar a API .NET
  };

  return (
    // Agregamos la clase 'register-mode' si queremos invertir el layout
    <div className="auth-container register-mode">
      
      {/* Lado Imagen */}
      <div className="auth-image-side">
        <img 
          src="https://images.unsplash.com/photo-1620336655052-b579708bb60d?q=80&w=1000&auto=format&fit=crop" 
          alt="Register Background" 
        />
        <div className="auth-overlay">
          <h2>ÚNETE A LA LEGIÓN</h2>
          <p>Descubre ofertas exclusivas, guarda tus favoritos y mucho más.</p>
        </div>
      </div>

      {/* Lado Formulario */}
      <div className="auth-form-side">
        <div className="auth-form-wrapper">
          <h1 className="auth-title">CREAR CUENTA</h1>
          <p className="auth-subtitle">Completa tus datos para comenzar</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre Completo</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Correo Electrónico</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input 
                type="password" 
                name="password"
                className="form-input" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Contraseña</label>
              <input 
                type="password" 
                name="confirmPassword"
                className="form-input" 
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem'}}>
                <input type="checkbox" required /> 
                Acepto los <a href="#" style={{color: '#ff6b35'}}>Términos y Condiciones</a>
              </label>
            </div>

            <button type="submit" className="auth-btn">REGISTRARSE</button>
          </form>

          <div className="auth-footer">
            ¿Ya tienes una cuenta? 
            <Link to="/login" className="auth-link">Inicia sesión aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;