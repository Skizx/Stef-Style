import { Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <div>
      <main>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
