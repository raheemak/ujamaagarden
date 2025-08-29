import { Home } from "./Home/Home";
import { NavBar } from "./NavBar/NavBar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
