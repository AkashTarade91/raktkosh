import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BloodAvailability from './components/BloodAvailability';
import BloodBankAvailability from './components/BloodBankAvailability';

function App() {
  return (
    <>
    <Navibar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/bloodAvailablitity' element={<BloodAvailability />}></Route>
      <Route path='/bloodBankAvailablitity' element={<BloodBankAvailability/>}></Route>
    </Routes>
    </>
    
   
  );
}

export default App;
