import styles from "./Mensagem.module.css";

export default function Mensagem({ texto, isEnviada, data }) {
  return (
    <div
      className={
        styles.caixa + " " + (isEnviada ? styles.enviada : styles.recebida)
      }
    >
      <p className={styles.mensagem}>{texto}</p>
      <p className={styles.data}>{data}</p>
    </div>
  );
}
