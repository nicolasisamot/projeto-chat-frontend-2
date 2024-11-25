import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { connectSocket } from "../socket";

export const AuthContext = createContext();
AuthContext.displayName = "Auth";

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [socketConectado, setSocketConectado] = useState(false);
  const [autenticado, setAutenticado] = useState(false);
  const [token, setToken] = useState(null);
  const [usuario, setUsuario] = useState(null);

  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      setToken(token);
      setUsuario(decodedToken.usuario);
      localStorage.setItem("authToken", token);
      setAutenticado(true);
    } catch (error) {
      //
    }
  };
  useEffect(() => {
    if (autenticado) {
      navigate("/chat");
    }
  }, [autenticado]);
<<<<<<< HEAD

=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("authToken");
    setAutenticado(false);
<<<<<<< HEAD
    setTimeout(() => {
      navigate("/login");
    });
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      try {
<<<<<<< HEAD
        // const decodedToken = jwtDecode(savedToken);
        // setUsuario(decodedToken.usuario);
        // setToken(savedToken);
        // setAutenticado(true);
        login(savedToken);
=======
        const decodedToken = jwtDecode(savedToken);
        setUsuario(decodedToken.usuario);
        setToken(savedToken);
        setAutenticado(true);
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
      } catch (error) {
        //
      }
    }
    connectSocket(token)
      .then(() => {
        setSocketConectado(true);
      })
      .catch(() => {
        setSocketConectado(false);
      });
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        autenticado,
        logout,
        login,
        usuario,
        setUsuario,
        socketConectado,
        setSocketConectado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
