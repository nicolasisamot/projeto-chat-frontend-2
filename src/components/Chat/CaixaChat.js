import styles from "./CaixaChat.module.css";
import ListaContatos from "../ListaContatos/ListaContatos";
import Conversa from "../Conversa/Conversa";
import CabecalhoConversa from "../CabecalhoConversa/CabecalhoConversa";
function CaixaChat() {
  return (
    <div className={styles.caixa + " " + styles.gridLinha}>
      <CabecalhoConversa />
      <div className={styles.conteudo + " " + styles.gridColuna}>
        <ListaContatos />
        <Conversa />
      </div>
    </div>
  );
}

export default CaixaChat;
