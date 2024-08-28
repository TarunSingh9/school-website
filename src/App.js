import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import HomePage from './HomePage';
import Academics from './Academics';
import Events from './Event';
import ContactUs from './ContactUs';
import About from './About';
import Login from './Login';
import Signup from './Signup';

import { Route, Routes } from 'react-router-dom';
import AdmissionForm from './component/AdmissionForm';
import AlumniReview from './component/AlumniReview';

function App() {
  return (
   <div className='App'>
    <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>} />     
     <Route path="/academics" element={<Academics/>} />
     <Route path="/events" element={<Events/>} />
     <Route path="/contactUs" element={<ContactUs/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />
     <Route path="/AdmissionForm" element={<AdmissionForm/>}/>
     <Route path="/Alumni-Review" element={<AlumniReview/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App
