import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Register from "./pages/Register";
import Sample from "./pages/Samples/Sample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
