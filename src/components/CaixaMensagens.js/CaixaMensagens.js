import styles from "./CaixaMensagens.module.css";
import Mensagem from "../Mensagem/Mensagem";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";

export default function CaixaMensagens({ conversa, setConversa }) {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas, conversaAtual } = useContext(ChatContext);

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
    <div className={styles.caixa}>
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

//<Mensagem
//       texto="Olá, tudo bem?"
//       data="10/10/2020 10:10"
//     isEnviada={false}
//     />
//    <Mensagem texto="Sim, e voce?" data="10/10/2020 10:10" isEnviada={true} />
//    <Mensagem texto="Tudo bem" data="10/10/2020 10:10" isEnviada={false} />
