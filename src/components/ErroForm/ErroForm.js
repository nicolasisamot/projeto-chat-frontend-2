import styles from "./ErroForm.module.css";

function ErroForm({ mensagem }) {
  return <h3 className={styles.erro}>{mensagem}</h3>;
}

export default ErroForm;
