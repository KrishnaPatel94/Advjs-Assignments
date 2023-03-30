import logo from "./logo.svg";
import "./App.css";
import Home from "./Compo/Home";
import { Route, Routes } from "react-router-dom";
import Rig from "./Compo/Rig";
import Update from "./Compo/update";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rig" element={<Rig />} />
        <Route path="/Update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
