import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./site/Home";
import { Destination } from "./site/Destination";
import { Crew } from "./site/Crew";
import { Technology } from "./site/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
