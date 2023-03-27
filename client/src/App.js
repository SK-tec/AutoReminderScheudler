import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Achivements from './components/Achivements';
import MyNav from './components/MyNav';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Header />
      <RegisterForm/>
      <Achivements/>
     <Footer/>
    </div>
  );
}

export default App;
