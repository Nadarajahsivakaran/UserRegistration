import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SuccessMessage from "./Pages/SuccessMessage";
import Home from "./Pages/Home";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="EditProfile" element={<EditProfile />} />

          <Route path="/" element={<Login />} />
          <Route path="Success" element={<SuccessMessage />} />
          <Route path="Register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
