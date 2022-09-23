import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { getClientById } from "../../Services/api";
export const Profile = () => {
  const { isUser, setUser } = useContext(UserContext);
  const data = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  };

  useEffect(() => {
    getClientById({ data, setUser });
  }, []);

  return <h1>Profile{console.log(isUser)}</h1>;
};
