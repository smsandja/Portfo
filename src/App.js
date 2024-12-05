import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Cv from './components/Cv';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
//import Home from './Home';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="Content">
          <About />
          <Projects />
          <Cv />
          <Contact />
          <Footer />
        </div>
    </div>
  );
}

export default App;
