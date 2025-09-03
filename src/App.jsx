import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';
import Services from './components/Services';
import Dashboard from './components/DashBoard';
import { AuthProvider } from './context';
import { ProtectedRoute, GuestRoute } from './components/auth';

const App = () => {
  return (
    <AuthProvider>
      <div className=''>
        <ToastContainer/>
        {/* <NavBarNew/> */}
        {/* <SideBar/> */}
        <NavBar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>

          {/* Protected Routes - Require Authentication */}
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>

          {/* Guest Routes - Only accessible when not authenticated */}
          <Route path='/auth' element={
            <GuestRoute>
              <Auth/>
            </GuestRoute>
          }/>

        </Routes>
        <Footer />

      </div>
    </AuthProvider>
  )
}

export default App