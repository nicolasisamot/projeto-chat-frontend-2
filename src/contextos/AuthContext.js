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
  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("authToken");
    setAutenticado(false);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      try {
        const decodedToken = jwtDecode(savedToken);
        setUsuario(decodedToken.usuario);
        setToken(savedToken);
        setAutenticado(true);
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
