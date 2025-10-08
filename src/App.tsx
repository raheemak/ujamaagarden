import { AboutUs } from "./AbousUs/AboutUs";
import { Donate } from "./Donate/Donate";
import { Home } from "./Home/Home";
import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
