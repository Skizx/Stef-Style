import { Routes, Route} from "react-router-dom"
import Footer from "./Components/Global/Footer/Footer";
import Navigation from "./Components/Global/Navigation/Navigation";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navigation />
      </header>
      <main>
      <Routes>
        <Route path="/Home" element={<Home />}/>
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
