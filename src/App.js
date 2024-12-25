
import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Welcome from "./components/welcome";
import Contact from "./components/contact";
import Resume from "./components/resume";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
