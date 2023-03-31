import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import PageNOtFound from './pages/PageNOtFound';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
  <>
  
    <Routes>
      <Route path="/" element ={<HomePage />}/>
      <Route path="/about" element ={<About />}/>
      <Route path="/contact" element ={<Contact />}/>
      <Route path="*" element ={<PageNOtFound />}/>
      <Route path="/signup" element ={<SignUp />}/>
      <Route path="/login" element ={<LogIn />}/>
      
    </Routes>

  </>
  );
}

export default App;
