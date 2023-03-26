import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Achivements from './components/Achivements';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Achivements/>
     <Footer/>
    </div>
  );
}

export default App;
