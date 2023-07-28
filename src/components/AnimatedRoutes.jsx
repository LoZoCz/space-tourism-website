import { Home } from "../site/Home";
import { Destination } from "../site/Destination";
import { Crew } from "../site/Crew";
import { Technology } from "../site/Technology";
import { Routes, Route, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
    </Routes>
  )
}
