import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Contacts } from "../Page/Contacts";
import { EditProfile } from "../Page/EditProfile";
import { Login } from "../Page/Login";
import { Profile } from "../Page/Profile";
import { Signup } from "../Page/Signup";
import { UserContext } from "../Providers/User";
import { getClientById } from "./api";
// import Genre from "../Pages/Genre";
// import Home from "../Pages/Home";

const Router = () => {
  const { getLocalStorage } = useContext(UserContext);
  const data = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  };

  useEffect(() => {
    getLocalStorage();
  }, []);
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
      <Route
        path="/editprofile"
        element={
          data.token && data.id ? <EditProfile /> : <Navigate to={"/login"} />
        }
      ></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      {/* <Route path="/anime-details/:name" element={<Genre />}></Route>
      <Route path="/genre" element={<Genre />}></Route>
      <Route path="/movies" element={<Genre />}></Route> */}
    </Routes>
  );
};

export default Router;
