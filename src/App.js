// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartSidebar from './components/common/CartSidebar';

// Nuevas rutas con la nueva arquitectura
import Home from './pages/Home/Home';
import Recommendations from './pages/Recommendations/Recommendations';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <CartSidebar />
      
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/recomendaciones" element={<Recommendations />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;