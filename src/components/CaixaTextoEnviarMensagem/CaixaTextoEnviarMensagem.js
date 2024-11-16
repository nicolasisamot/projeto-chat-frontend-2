import styles from "./CaixaTextoEnviarMensagem.module.css";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";
import { cadastrarMensagem } from "../../socket";

export default function CaixaTextoEnviarMensagem({ conversa, setConversa }) {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas, conversaAtual } = useContext(ChatContext);
  function enviarMensagem(event) {
    event.preventDefault();
    const mensagem = event.target[0].value;
    cadastrarMensagem({
      mensagem,
      conversa_id: conversaAtual.conversa_id,
      destinatario_id: conversaAtual.usuario_id,
    });
  }
  return (
    conversaAtual && (
      <form
        className={styles.caixa + " " + styles.gridColuna}
        onSubmit={enviarMensagem}
      >
        <input className={styles.texto} type="text" />
        <button type="submit" className={styles.botao}>
          Enviar
        </button>
      </form>
    )
  );
}
