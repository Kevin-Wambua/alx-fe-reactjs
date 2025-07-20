import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';

function App() {
  return (
     <><div>
      <UserProfile name="Jane Doe" age={25} bio="Software Engineer from Nairobi." />
    </div><Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router></>
  );
}

export default App;
