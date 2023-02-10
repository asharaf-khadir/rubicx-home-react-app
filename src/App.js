import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import UserData from './components/form/UserData';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <UserData />
    </div>
  );
}

export default App;
