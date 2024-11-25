import styles from "./CaixaMensagens.module.css";
import Mensagem from "../Mensagem/Mensagem";
import { useEffect, useContext, useState, useRef } from "react";
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";

export default function CaixaMensagens({ conversa, setConversa }) {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas, conversaAtual } = useContext(ChatContext);
  const fimRef = useRef(null);

  const scrollToBottom = () => {
    if (fimRef.current) {
      const container = fimRef.current;
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 0);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversa]);

  useEffect(() => {
    if (socketConectado) {
      if (conversaAtual) {
        let mensagens = conversas
          .filter(
            (conversa) => conversa.conversa_id === conversaAtual.conversa_id
          )
          .map((conversa) => conversa.mensagens)
          .flat();
        setConversa(mensagens);
      }
    }
  }, [socketConectado, conversaAtual]);

  return (
    <div ref={fimRef} className={styles.caixa}>
      {conversa &&
        conversa.map((mensagem) => {
          return (
            <Mensagem
              key={mensagem.id}
              texto={mensagem.mensagem}
              data={mensagem.createdAt}
              isEnviada={!(mensagem.remetente_id === conversaAtual.usuario_id)}
            />
          );
        })}
    </div>
  );
}
