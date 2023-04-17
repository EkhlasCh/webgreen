import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Forside from './pages/Forside';
import Omos from './pages/Omos';
import Kontakt from './pages/Kontakt';
import Projekter from './pages/Projekter';
import Bookmøde from './pages/Bookmøde';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/Forside' element={<Forside/>} />
          <Route path='/omos' element={<Omos/>}/>
          <Route path='/kontakt' element={<Kontakt/>}/>
          <Route path='/projekter' element={<Projekter/>}/>
          <Route path='/bookmøde' element={<Bookmøde/>}/>
        </Routes>

        <Footer/>
     </BrowserRouter>
     
    </div>
   
  );
}

export default App;
