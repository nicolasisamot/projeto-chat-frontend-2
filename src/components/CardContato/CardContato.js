import styles from "./CardContato.module.css";
import { useContext, useEffect } from "react";
import { ChatContext } from "../../contextos/ChatContext";
import { AuthContext } from "../../contextos/AuthContext";

export default function CardContato({
  fotoUsuario = "./assets/images/sem-foto.png",
  nomeUsuario,
  novasMensagens,
  conversaId,
  usuarioId,
  amigo,
  cardConversaAtual,
}) {
  const { conversas, setConversaAtual, setConversas } = useContext(ChatContext);
  const { socketConectado } = useContext(AuthContext);

  useEffect(() => {
    if (socketConectado) {
    }
  }, [socketConectado]);

  function abrirConversa(conversaId, nomeUsuario, usuarioId) {
    if (amigo == true) {
      setConversaAtual({
        conversa_id: conversaId,
        usuario: nomeUsuario,
        usuario_id: usuarioId,
      });
    }
  }
  return (
    <div
      className={
        styles.cardContato +
        " " +
        (amigo ? styles.clicavel : "") +
        " " +
        (cardConversaAtual ? styles.cardConversaAtual : "")
      }
      onClick={() => {
        abrirConversa(conversaId, nomeUsuario, usuarioId);
      }}
    >
      {" "}
      {fotoUsuario && (
        <picture className={styles.foto}>
          <img src={fotoUsuario}></img>
        </picture>
      )}
      <span className={styles.nome}>{nomeUsuario}</span>
      {novasMensagens > 0 ? (
        <span className={styles.novasMensagens}> {novasMensagens}</span>
      ) : null}
    </div>
  );
}
