import styles from "./Form.module.css";

function Form({ titulo, children, handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.titulo}>{titulo}</h1>
      {children}
    </form>
  );
}

export default Form;
