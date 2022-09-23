import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [isUser, setUser] = useState({});
  const [isData, setData] = useState({
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  });

  const getLocalStorage = () => {
    setData({
      id: localStorage.getItem("id"),
      token: localStorage.getItem("jwt"),
    });
  };
  
  const clearLocalStorage = () => {
    setData({
      id: localStorage.clear("id"),
      token: localStorage.clear("jwt"),
    });
  };
  //   const addUser = (user) => {
  //      setUser(user);
  //   };
  //   const removeCart = (item) => {
  //     const newCart = isCart.filter((product) => product.name !== item.name);
  //     setCart(newCart);
  //   };

  return (
    <UserContext.Provider value={{ isUser, setUser, isData, getLocalStorage, clearLocalStorage }}>
      {children}
    </UserContext.Provider>
  );
};
