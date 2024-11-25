import styles from "./Modal.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4

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
<<<<<<< HEAD

  // return (
  //   <div className={styles.modal}>
  //     <span>
  //       <i className={styles.close} onClick={onClose}>
  //         <FontAwesomeIcon icon={faXmark} />
  //       </i>
  //     </span>
  //     <h3 className={styles.titulo}>{titulo}</h3>
  //     {children}
  //   </div>
  // );
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
}
