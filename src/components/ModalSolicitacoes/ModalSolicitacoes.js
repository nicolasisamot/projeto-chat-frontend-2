import styles from "./ModalSolicitacoes.module.css";
import Modal from "../Modal/Modal";

export default function ModalSolicitacoes({ show, children, onClose }) {
  return show ? (
    <div className={styles.modalSolicitacoes}>
      <Modal onClose={onClose} titulo="Solicitações"></Modal>
    </div>
  ) : null;
}
