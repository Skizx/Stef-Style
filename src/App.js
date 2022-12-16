import { Routes, Route} from "react-router-dom"
import Footer from "./Components/Global/Footer/Footer";
import Navigation from "./Components/Global/Navigation/Navigation";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home"
import Presentation from "./Pages/Presentation";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navigation />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Presentation" element={<Presentation />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
