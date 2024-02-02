
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';


import Mapview from './page/Mapview';
import Dashboard from './page/Dashboard';
import Signin from './page/Signin';
import Signup from './page/Signup';
import Navbar from './com/Navbar';







function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
    
    <BrowserRouter>
    <Navbar />
    
    <Routes>
    <Route path='/Dash' element={<Dashboard />} />
      <Route path='/Cart' element={<Home />} />
      <Route path='/Map' element={<About />} />
      <Route path='/Blog' element={<Contact />} />
      <Route path='/Mapview' element={<Mapview />} />
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
