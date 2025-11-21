import { AboutUs } from "./AbousUs/AboutUs";
import { Donate } from "./Donate/Donate";
import { EventsAndProgramming } from "./EventsAndProgramming/EventsAndProgramming";
import { Home } from "./Home/Home";
import { ImageGallery } from "./ImageGallery/ImageGallery";
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
          {/* <Route path="/donate" element={<Donate />} /> */}
          <Route path="/images" element={<ImageGallery />} />
          <Route
            path="/events"
            element={<EventsAndProgramming eventType="EVENT" />}
          />
          <Route
            path="/programs"
            element={<EventsAndProgramming eventType="PROGRAM" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
