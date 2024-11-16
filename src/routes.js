import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Chat from "./pages/Chat";
import AuthContextProvider from "./contextos/AuthContext";
import ChatContextProvider from "./contextos/ChatContext";

export default function Rotas() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<h1>PAGINA INICIAL</h1>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route
            path="/chat"
            element={
              <ChatContextProvider>
                <Chat />
              </ChatContextProvider>
            }
          ></Route>
          <Route path="*" element={<h1>ERROR 404</h1>}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
