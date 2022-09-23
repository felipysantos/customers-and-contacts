import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [isUser, setUser] = useState({});

//   const addUser = (user) => {
//      setUser(user);
//   };
//   const removeCart = (item) => {
//     const newCart = isCart.filter((product) => product.name !== item.name);
//     setCart(newCart);
//   };

  return (
    <UserContext.Provider value={{ isUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};