import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Signup from './pages/SignUp';
import Signin from './pages/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBarNew from './components/NavBarNew';
import Timetable from './pages/TimeTable';
import SideBar from './components/SideBar';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className=''>
      <ToastContainer/>
      {/* <NavBarNew/> */}
      {/* <SideBar/> */}
      {/* <NavBar/>  */}
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/timetable' element={<Timetable/>}/>

      </Routes>
      <Footer />

    </div>
  )
}

export default App