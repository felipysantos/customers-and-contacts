import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../Page/Login";
import { Signup } from "../Page/Signup";
// import Genre from "../Pages/Genre";
// import Home from "../Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Route path="/anime-details/:name" element={<Genre />}></Route>
      <Route path="/genre" element={<Genre />}></Route>
      <Route path="/movies" element={<Genre />}></Route> */}
    </Routes>
  );
};

export default Router;
