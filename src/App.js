import Navbar from './components/Navbar';
import Body from './components/Body';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
<div>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <hr />
    <Footer/>
  </Router>
</div>
  );
}

export default App;