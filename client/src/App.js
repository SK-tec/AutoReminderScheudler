import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Achivements from "./components/Achivements";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";

import Admin from "./components/Admin";

import Notices from "./components/Notices";
import { useState } from "react";
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<RegisterForm />} />
        <Route
          path="/signin"
          element={<Signin setIsLoggedin={setIsLoggedin} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
