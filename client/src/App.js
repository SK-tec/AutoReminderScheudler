import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

import { useState } from "react";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <MyNav isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/signin"
          element={<Signin setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="/admin" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
