import styles from "./Conversa.module.css";
import CaixaTextoEnviarMensagem from "../CaixaTextoEnviarMensagem/CaixaTextoEnviarMensagem.js";
import CaixaMensagens from "../CaixaMensagens.js/CaixaMensagens.js";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";
import { retornoNovaMensagem, cancelarRetornoNovaMensagem } from "../../socket";

export default function Conversa() {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas, conversaAtual } = useContext(ChatContext);
  const [conversa, setConversa] = useState(null);
  // Função para ordenar as conversas pela data da última mensagem
  const ordenarConversas = (conversas) => {
    return conversas
      .slice()
      .sort(
        (a, b) =>
          new Date(b.data_ultima_mensagem) - new Date(a.data_ultima_mensagem)
      );
  };

  useEffect(() => {
    if (socketConectado) {
      retornoNovaMensagem((novaMensagem) => {
        if (novaMensagem.conversa_id === conversaAtual.conversa_id) {
          setConversa((conversa) => [...conversa, novaMensagem]);
        }
        setConversas((conversas) => {
          // Atualiza a conversa com a nova data e ordena
          const conversasAtualizadas = conversas.map((conversa) => {
            if (conversa.conversa_id === novaMensagem.conversa_id) {
              return {
                ...conversa,
                data_ultima_mensagem: novaMensagem.createdAt,
                mensagens: [...conversa.mensagens, novaMensagem],
              };
            }
            return conversa;
          });

          // Ordena as conversas e retorna a lista atualizada
          return ordenarConversas(conversasAtualizadas);
        });
      });
    }

    return () => {
      cancelarRetornoNovaMensagem();
    };
  }, [socketConectado, conversaAtual]);

  return (
<<<<<<< HEAD
    <div className={styles.conversa}>
=======
    <div className={styles.conversa + " " + styles.gridLinha}>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
      <CaixaMensagens conversa={conversa} setConversa={setConversa} />
      <CaixaTextoEnviarMensagem conversa={conversa} setConversa={setConversa} />
    </div>
  );
}
