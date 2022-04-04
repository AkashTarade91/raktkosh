import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BloodAvailability from './components/BloodAvailability';
import BloodBankAvailability from './components/BloodBankAvailability';
import DonorLogin from './components/donor/DonorLogin';
import DonorRegister from './components/donor/DonorRegister';
import DonorAppointment from './components/donor/DonorAppointment';
import CampSchedule from './components/bank/CampSchedule';
<<<<<<< HEAD
import CampRegister from './components/bank/CampRegister';
=======
import BloodStock from './components/bank/BloodStock'
>>>>>>> 8376a8d27d4b6d3c3cbdbbd90f35deff5447167b
import Login from './components/bank/Login';
import Register from './components/bank/Register';
import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  


  render() {
  
    return (
      <>
      <Navibar/>
     
      {
        
      }
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/bloodAvailablitity' element={<BloodAvailability />}></Route>
        <Route path='/bloodBankAvailablitity' element={<BloodBankAvailability/>}></Route>
        
        <Route path='/donor/login' element={<DonorLogin/>}></Route>
        <Route path='/donor/register' element={<DonorRegister/>}></Route>
        <Route path='/donor/donorAppointment' element={<DonorAppointment/>}></Route>
        <Route path='/bank/CampSchedule' element={<CampSchedule/>}></Route>
        <Route path='/bank/bloodStock' element={<BloodStock/>}></Route>

  
        <Route path='/bank/login' element={<Login/>}></Route>
        <Route path='/bank/register' element={<Register/>}></Route>
        <Route path='/bank/CampRegister'  element={<CampRegister/>}></Route>
      </Routes>
      </>
    )
  }
}

export default App
