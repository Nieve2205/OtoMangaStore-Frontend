import React from 'react';
import './About.css';

const About = () => {
  // Datos del equipo (Simulados)
  const teamMembers = [
    { 
      id: 1, 
      name: 'Ricardo "Senpai"', 
      role: 'Fundador & CEO', 
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200' 
    },
    { 
      id: 2, 
      name: 'Elena "Neko"', 
      role: 'Directora de Contenido', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' 
    },
    { 
      id: 3, 
      name: 'Javier "Tank"', 
      role: 'Jefe de Logística', 
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200' 
    },
  ];

  return (
    <div className="about-container">
      
      {/* 1. HERO BANNER */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>SOMOS <span>OTAMANGA</span></h1>
          <p>Más que una tienda, una comunidad.</p>
        </div>
      </section>

      {/* 2. NUESTRA HISTORIA */}
      <section className="about-section">
        <div className="about-text">
          <h2>NUESTRA HISTORIA</h2>
          <p>
            Todo comenzó en 2024, en una pequeña habitación llena de estanterías a punto de colapsar. 
            Éramos un grupo de amigos frustrados porque no encontrábamos ese manga específico o esa edición especial en Perú.
          </p>
          <p>
            Decidimos dejar de quejarnos y crear la solución. <strong>OtoManga Store</strong> nació con una misión simple: 
            traer Japón a tu puerta, sin complicaciones y con la pasión que solo un verdadero fan entiende.
          </p>
        </div>
        <div className="about-img">
          {/* Foto de estantería de mangas */}
          <img 
            src="https://images.unsplash.com/photo-1560785496-3c4d2dd48f71?auto=format&fit=crop&q=80&w=800" 
            alt="Estantería de mangas" 
          />
        </div>
      </section>

      {/* 3. STATS (Autoridad) */}
      <section className="about-stats">
        <div className="stat-item">
          <h3>15k+</h3>
          <p>Mangas Vendidos</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Títulos Disponibles</p>
        </div>
        <div className="stat-item">
          <h3>99%</h3>
          <p>Clientes Felices</p>
        </div>
      </section>

      {/* 4. VISIÓN (Layout Inverso) */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>NUESTRA VISIÓN</h2>
          <p>
            Queremos ser el puente definitivo entre las editoriales japonesas y Latinoamérica. 
            Creemos que leer manga no es solo un hobby, es una forma de arte que merece ser accesible para todos.
          </p>
          <p>
            Trabajamos día a día para mejorar nuestra logística, reducir tiempos de envío y 
            conseguir esas licencias exclusivas que tanto buscas.
          </p>
        </div>
        <div className="about-img">
          {/* Foto de persona leyendo o ambiente otaku */}
          <img 
            src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&q=80&w=800" 
            alt="Comunidad Leyendo" 
          />
        </div>
      </section>
    </div>
  );
};

export default About;