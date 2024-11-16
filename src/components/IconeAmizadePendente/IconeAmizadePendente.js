import styles from "./IconeAmizadePendente.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconeAmizadePendente({ numeroAmizadesPendentes }) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faUser} />
      <span className={styles.numeroAmizadesPendentes}>
        {numeroAmizadesPendentes}
      </span>
    </div>
  );
}
