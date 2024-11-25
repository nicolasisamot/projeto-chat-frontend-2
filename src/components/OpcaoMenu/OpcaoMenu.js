import styles from "./OpcaoMenu.module.css";

export default function OpcaoMenu({ titulo, onClick }) {
  return (
    <div className={styles.opcaoMenu}>
      <a className={styles.opcao} onClick={onClick}>
        {titulo}
      </a>
    </div>
  );
}
