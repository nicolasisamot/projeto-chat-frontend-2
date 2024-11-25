import styles from "./CaixaMensagens.module.css";
import Mensagem from "../Mensagem/Mensagem";
<<<<<<< HEAD
import { useEffect, useContext, useState, useRef } from "react";
=======
import { useEffect, useContext, useState } from "react";
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";

export default function CaixaMensagens({ conversa, setConversa }) {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas, conversaAtual } = useContext(ChatContext);
<<<<<<< HEAD
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
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4

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
<<<<<<< HEAD
    <div ref={fimRef} className={styles.caixa}>
=======
    <div className={styles.caixa}>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
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
<<<<<<< HEAD
=======

//<Mensagem
//       texto="Olá, tudo bem?"
//       data="10/10/2020 10:10"
//     isEnviada={false}
//     />
//    <Mensagem texto="Sim, e voce?" data="10/10/2020 10:10" isEnviada={true} />
//    <Mensagem texto="Tudo bem" data="10/10/2020 10:10" isEnviada={false} />
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
