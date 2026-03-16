import { AboutUs } from "./AbousUs/AboutUs";
// import { Donate } from "./Donate/Donate";
import { Home } from "./Home/Home";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Programs } from "./Programs/Programs";
import { Events } from "./Events/Events";
import { MomProgram } from "./Programs/Programs/MomProgram";
import { Restoration } from "./Programs/Programs/Restoration";
import { YouthEducation } from "./Programs/Programs/YouthEducation";
import { ContactUs } from "./ContactUs/ContactUs";
import { OurTeam } from "./OurTeam/OurTeam";
import { Donate } from "./Donate/Donate";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/images" element={<ImageGallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/mom-program" element={<MomProgram />} />
          <Route path="/environmental-conservation" element={<Restoration />} />
          <Route path="/youth-education" element={<YouthEducation />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
