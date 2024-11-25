import styles from "./CabecalhoConversa.module.css";
import { useContext, useState } from "react";
import { ChatContext } from "../../contextos/ChatContext";
import CardContato from "../CardContato/CardContato";
<<<<<<< HEAD
import {
  faUserPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

=======
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
import IconeAmizadePendente from "../IconeAmizadePendente/IconeAmizadePendente";
import Modal from "../Modal/Modal";
import ModalSolicitacoes from "../ModalSolicitacoes/ModalSolicitacoes";
import ModalAdicionar from "../ModalAdicionar/ModalAdicionar";
<<<<<<< HEAD
import ModalMenu from "../ModalMenu/ModalMenu";
=======
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4

export default function CabecalhoConversa() {
  const { conversaAtual } = useContext(ChatContext);
  const [isSolicitacoesOpen, setIsSolicitacoesOpen] = useState(false);
  const [isAdicionarOpen, setIsAdicionarOpen] = useState(false);
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.cabecalho}>
      <div className={styles.botaoMenu}>
        <div className={styles.positionRelative}>
          <div
            className={styles.icon + " " + (isMenuOpen ? styles.clicado : null)}
            onClick={() => {
              isSolicitacoesOpen && setIsSolicitacoesOpen(false);
              isAdicionarOpen && setIsAdicionarOpen(false);
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <ModalMenu
            show={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          ></ModalMenu>
        </div>
      </div>
      {conversaAtual ? (
=======

  return (
    <div className={styles.cabecalho}>
      {conversaAtual && (
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
        <div className={styles.caixaCardContato}>
          <CardContato
            key={conversaAtual.conversa_id}
            usuarioId={conversaAtual.usuario_id}
            nomeUsuario={conversaAtual.usuario}
            conversaId={conversaAtual.conversa_id}
<<<<<<< HEAD
            fotoUsuario={conversaAtual.foto}
            novasMensagens={0}
            cardConversaAtual={true}
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.botoes}>
        <div className={styles.positionRelative}>
          <div
            className={
              styles.icon + " " + (isAdicionarOpen ? styles.clicado : null)
            }
            onClick={() => {
              isSolicitacoesOpen && setIsSolicitacoesOpen(false);
              isMenuOpen && setIsMenuOpen(false);
=======
            fotoUsuario="https://github.com/nicolasisamot.png"
            novasMensagens={0}
          />
        </div>
      )}
      <div className={styles.botoes}>
        <div className={styles.positionRelative}>
          <i
            className={styles.icon}
            onClick={() => {
              isSolicitacoesOpen && setIsSolicitacoesOpen(false);
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
              setIsAdicionarOpen(!isAdicionarOpen);
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} />
<<<<<<< HEAD
          </div>
=======
          </i>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
          <ModalAdicionar
            show={isAdicionarOpen}
            onClose={() => setIsAdicionarOpen(false)}
          ></ModalAdicionar>
        </div>
        <div className={styles.positionRelative}>
<<<<<<< HEAD
          <div
            className={
              styles.icon + " " + (isSolicitacoesOpen ? styles.clicado : null)
            }
            onClick={() => {
              isAdicionarOpen && setIsAdicionarOpen(false);
              isMenuOpen && setIsMenuOpen(false);
=======
          <i
            className={styles.icon}
            onClick={() => {
              isAdicionarOpen && setIsAdicionarOpen(false);
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
              setIsSolicitacoesOpen(!isSolicitacoesOpen);
            }}
          >
            <IconeAmizadePendente numeroAmizadesPendentes={5} />
<<<<<<< HEAD
          </div>
=======
          </i>
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4

          <ModalSolicitacoes
            show={isSolicitacoesOpen}
            onClose={() => setIsSolicitacoesOpen(false)}
          ></ModalSolicitacoes>
        </div>
      </div>
    </div>
  );
}
