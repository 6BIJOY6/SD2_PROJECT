import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import PageNOtFound from './pages/PageNOtFound';
import Contact from './pages/Contact';

// import Footer from './components/Layout/Footer';
function App() {
  return (
  <>
  
    <Routes>
      <Route path="/" element ={<HomePage />}/>
      <Route path="/about" element ={<About />}/>
      <Route path="/contact" element ={<Contact />}/>
      <Route path="*" element ={<PageNOtFound />}/>
      
    </Routes>

  </>
  );
}

export default App;
