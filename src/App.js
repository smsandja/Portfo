import './App.css';
import About from './components/About';
import Cv from './components/Cv';
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
        </div>
    </div>
  );
}

export default App;
