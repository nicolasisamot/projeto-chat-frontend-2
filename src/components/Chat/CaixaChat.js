import styles from "./CaixaChat.module.css";
import ListaContatos from "../ListaContatos/ListaContatos";
import Conversa from "../Conversa/Conversa";
import CabecalhoConversa from "../CabecalhoConversa/CabecalhoConversa";
function CaixaChat() {
  return (
    <div className={styles.caixa + " " + styles.gridLinha}>
      <CabecalhoConversa />
<<<<<<< HEAD
      <div className={styles.conteudo}>
=======
      <div className={styles.conteudo + " " + styles.gridColuna}>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
        <ListaContatos />
        <Conversa />
      </div>
    </div>
  );
}

export default CaixaChat;
