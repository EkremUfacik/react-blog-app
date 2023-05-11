import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("USER")) || ""
  );
  const [isDark, setIsDark] = useState(false);

  const [loading, setLoading] = useState(false);

  const values = {
    currentUser,
    setCurrentUser,
    isDark,
    setIsDark,
    loading,
    setLoading,
  };

  return (
    <>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
