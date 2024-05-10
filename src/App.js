import './App.css';
import Banners from './components/banners';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import OurProducts from './components/ourproducts';
import WelcomeSection from './components/welcomesection';

function App() {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<Banners/>}
      {<OurProducts/>}
      {<Footer/>}
    </>
  );
}

export default App;
