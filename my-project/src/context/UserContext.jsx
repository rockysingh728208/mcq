import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [score, setScore] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, score, setScore }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
