import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Compenents/Header/Header.jsx';
import Hero from './Compenents/Hero/Hero.jsx';
import Card from './Compenents/Card/Card.jsx';
import Home from './Compenents/Home/Home.jsx';
import './App.css';
import DetailCard from './Compenents/detailCard/deatilCard.jsx';
import Contact from './Compenents/Contact/Contact.jsx';
import Ss from './Compenents/Ss.jsx';
import Login from './Compenents/login/Login.jsx';
import Admin from './Compenents/Dashbord/Dashbord.jsx';
import Parteners from './Compenents/Parteners.jsx';
import Cart from './Compenents/Cart/Cart.jsx'
import Footer from './Compenents/FOTER/Foter.jsx';
import About from './Compenents/About/About.tsx';

function App() {
  const [cart, setCart] = useState([]);

  // Gestion de l'ajout au panier
  const handlClick = (product) => {
    // Vérifier si le produit est déjà dans le panier
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si le produit existe, augmenter la quantité
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Sinon, ajouter le produit au panier
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      {/* Header avec le nombre d'articles dans le panier */}
      <Header size={cart.length} />

      {/* Contenu des routes */}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Hero />
                <Ss />
                <Parteners />
                <Footer />
                <Admin />
              </>
            }
          />

          {/* Route pour afficher une carte */}
          <Route path="/card" element={<Card handlClick={handlClick} />} />

          {/* Route pour afficher le détail d'un produit avec gestion du panier */}
          <Route
            path="/detailCard/:id"
            element={<DetailCard handlClick={handlClick} />}
          />

          {/* Autres routes */}
          <Route path="/about" element={<About />} />
          <Route path="/cart/:id_cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
