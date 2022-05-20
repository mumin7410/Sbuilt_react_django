import './App.css';
import React, { Component }  from 'react';
import Home from './Page/Home/Home'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ScrolltoTop from './ScrolltoTop'
import GlobalStyle from './globalStyles';
import Contact from './Page/Contact/Contact';
import Footer from './components/Footer/footer';
import Catalog from './Page/Catalog/Catalog';
import Desc from './Page/CatalogDesc/Catalogdesc';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrolltoTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog/:id" element={<Catalog />} />
        <Route path="/Desc" element={<Desc />} />

      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
