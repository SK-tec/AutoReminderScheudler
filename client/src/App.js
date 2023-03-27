import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Achivements from './components/Achivements';
import MyNav from './components/MyNav';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import Signin from './components/Signin';
import { Routes, Route } from "react-router-dom";
import Notices from './components/Notices';

function App() {
  return (
    <div className="App">  
         
     <MyNav />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
      <Notices />
        <Route path="/admin" element={<RegisterForm />} />
        
        <Route path="/signin" element={<Signin/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
