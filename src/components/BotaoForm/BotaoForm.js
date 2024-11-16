import styles from "./BotaoForm.module.css";

function BotaoForm({ titulo, type }) {
  return (
    <button className={styles.botao} type={type}>
      {titulo}
    </button>
  );
}
export default BotaoForm;
