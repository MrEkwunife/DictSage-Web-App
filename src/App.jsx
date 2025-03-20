import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import Signup from "./pages/Signup";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
