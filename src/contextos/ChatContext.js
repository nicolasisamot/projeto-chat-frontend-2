import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();
ChatContext.displayName = "Chat";

export default function ChatContextProvider({ children }) {
  const [conversas, setConversas] = useState([]);
  const [conversaAtual, setConversaAtual] = useState(null);
  return (
    <ChatContext.Provider
      value={{
        conversaAtual,
        setConversaAtual,
        conversas,
        setConversas,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
