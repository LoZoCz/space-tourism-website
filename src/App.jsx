import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import "./scss/animations.scss";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
