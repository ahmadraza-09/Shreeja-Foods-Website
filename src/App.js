import './App.css';
import Banners from './components/banners';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import WelcomeSection from './components/welcomesection';

function App() {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<Banners/>}
      {<Footer/>}
    </>
  );
}

export default App;
