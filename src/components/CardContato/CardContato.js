import styles from "./CardContato.module.css";
import { useContext, useEffect } from "react";
import { ChatContext } from "../../contextos/ChatContext";
import { AuthContext } from "../../contextos/AuthContext";

export default function CardContato({
<<<<<<< HEAD
  fotoUsuario = "./assets/images/sem-foto.png",
=======
  fotoUsuario,
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
  nomeUsuario,
  novasMensagens,
  conversaId,
  usuarioId,
  amigo,
<<<<<<< HEAD
  cardConversaAtual,
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
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
<<<<<<< HEAD
      className={
        styles.cardContato +
        " " +
        (amigo ? styles.clicavel : "") +
        " " +
        (cardConversaAtual ? styles.cardConversaAtual : "")
      }
=======
      className={styles.cardContato + " " + (amigo ? styles.clicavel : "")}
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
      onClick={() => {
        abrirConversa(conversaId, nomeUsuario, usuarioId);
      }}
    >
<<<<<<< HEAD
      {" "}
      {fotoUsuario && (
        <picture className={styles.foto}>
          <img src={fotoUsuario}></img>
        </picture>
      )}
=======
      <picture className={styles.foto}>
        <img src={fotoUsuario}></img>
      </picture>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
      <span className={styles.nome}>{nomeUsuario}</span>
      {novasMensagens > 0 ? (
        <span className={styles.novasMensagens}> {novasMensagens}</span>
      ) : null}
    </div>
  );
}
