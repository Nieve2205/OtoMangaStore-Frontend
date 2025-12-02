import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login intent:', formData);
    // Aquí conectarás con tu API .NET
  };

  return (
    <div className="auth-container">
      {/* Lado Izquierdo: Imagen */}
      <div className="auth-image-side">
        <img 
          src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000&auto=format&fit=crop" 
          alt="Login Background" 
        />
        <div className="auth-overlay">
          <h2>BIENVENIDO DE NUEVO</h2>
          <p>Tu colección te espera. Continúa tu aventura.</p>
        </div>
      </div>

      {/* Lado Derecho: Formulario */}
      <div className="auth-form-side">
        <div className="auth-form-wrapper">
          <h1 className="auth-title">INICIAR SESIÓN</h1>
          <p className="auth-subtitle">Ingresa tus credenciales para acceder</p>

          <form onSubmit={handleSubmit}>
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

            <div className="form-options">
              <label style={{display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'}}>
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="auth-btn">ENTRAR</button>
          </form>

          <div className="auth-footer">
            ¿No tienes una cuenta? 
            <Link to="/registro" className="auth-link">Regístrate aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;