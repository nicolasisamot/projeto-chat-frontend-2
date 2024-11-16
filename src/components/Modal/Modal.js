import styles from "./Modal.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ titulo, children, onClose }) {
  return (
    <div className={styles.modal}>
      <span>
        <i className={styles.close} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </span>
      <h3 className={styles.titulo}>{titulo}</h3>
      {children}
    </div>
  );
}
