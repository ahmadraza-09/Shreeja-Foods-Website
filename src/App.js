import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import ShopPage from './pages/shoppage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/shop" element={<ShopPage/>}/>
          <Route  path="/contact" element={<ContactPage/>}/>
          <Route  path="/gallery" element={<GalleryPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
