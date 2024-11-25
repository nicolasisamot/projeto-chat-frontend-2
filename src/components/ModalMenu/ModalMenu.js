import styles from "./ModalMenu.module.css";
import Modal from "../Modal/Modal";
import CampoForm from "../CampoForm/CampoForm";
import BotaoForm from "../BotaoForm/BotaoForm";
import { useState } from "react";
import ErroForm from "../ErroForm/ErroForm";
import { AuthContext } from "../../contextos/AuthContext";
import { useContext, useEffect } from "react";
import validator from "validator";
import SucessoForm from "../SucessoForm/SucessoForm";
import OpcaoMenu from "../OpcaoMenu/OpcaoMenu";
import {
  enviarSolicitacao,
  cancelarRetornoSolicitarAmizadeSucesso,
  cancelarRetornoSolicitarAmizadeErro,
  retornoSolicitarAmizadeSucesso,
  retornoSolicitarAmizadeErro,
} from "../../socket";
import { useNavigate } from "react-router-dom";

export default function ModalMenu({ show, children, onClose }) {
  const { socketConectado, autenticado, logout } = useContext(AuthContext);

  return show ? (
    <div className={styles.ModalMenu}>
      <Modal
        titulo=""
        onClose={() => {
          onClose();
        }}
      >
        {" "}
        <ul className={styles.opcoesMenu}>
          <li>
            <OpcaoMenu titulo="Perfil" onClick={() => {}}></OpcaoMenu>
          </li>
          <li>
            <OpcaoMenu
              titulo="Logout"
              onClick={() => {
                logout();
              }}
            ></OpcaoMenu>
          </li>
        </ul>
      </Modal>
    </div>
  ) : null;
}
