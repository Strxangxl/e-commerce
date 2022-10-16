import { Routes, Route } from "react-router-dom"

import Header from "./components/Header";

import { Login, Home, Register } from "./pages/index";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;