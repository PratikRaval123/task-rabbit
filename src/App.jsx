import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LadingPage";
import Service from "./components/Pages/Service";
import BecomeATester from "./components/Pages/BecomeATester";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import AboutUs from "./components/Pages/AboutUs";
import { AuthContext } from "./Auth";
import { useState } from "react";
import { Footer, Navbar } from "./components";
const App = () => {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem("tokens") || "");
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  console.log("authTokens", authTokens);

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    setAuthTokens("");
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Navbar authTokens={authTokens} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage authTokens={authTokens} handleLogout={handleLogout} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login setTokens={setTokens} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/becomeATester" element={<BecomeATester />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
