import styles from "./SucessoForm.module.css";

function SucessoForm({ mensagem }) {
  return <h3 className={styles.sucesso}>{mensagem}</h3>;
}

export default SucessoForm;
