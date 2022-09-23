import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Page/Login";
import { Profile } from "../Page/Profile";
import { Signup } from "../Page/Signup";
// import Genre from "../Pages/Genre";
// import Home from "../Pages/Home";

const Router = () => {
  const data = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  };

  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/login"
        element={
          data.token && data.id ? <Navigate to={"/profile"} /> : <Login />
        }
      ></Route>
      <Route
        path="/profile"
        element={
          data.token && data.id ? <Profile /> : <Navigate to={"/login"} />
        }
      ></Route>
      {/* <Route path="/" element={<Home />}></Route> */}
      {/* <Route path="/anime-details/:name" element={<Genre />}></Route>
      <Route path="/genre" element={<Genre />}></Route>
      <Route path="/movies" element={<Genre />}></Route> */}
    </Routes>
  );
};

export default Router;
