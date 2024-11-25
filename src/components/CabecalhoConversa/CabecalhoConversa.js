import styles from "./CabecalhoConversa.module.css";
import { useContext, useState } from "react";
import { ChatContext } from "../../contextos/ChatContext";
import CardContato from "../CardContato/CardContato";
import {
  faUserPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconeAmizadePendente from "../IconeAmizadePendente/IconeAmizadePendente";
import Modal from "../Modal/Modal";
import ModalSolicitacoes from "../ModalSolicitacoes/ModalSolicitacoes";
import ModalAdicionar from "../ModalAdicionar/ModalAdicionar";
import ModalMenu from "../ModalMenu/ModalMenu";

export default function CabecalhoConversa() {
  const { conversaAtual } = useContext(ChatContext);
  const [isSolicitacoesOpen, setIsSolicitacoesOpen] = useState(false);
  const [isAdicionarOpen, setIsAdicionarOpen] = useState(false);
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
        <div className={styles.caixaCardContato}>
          <CardContato
            key={conversaAtual.conversa_id}
            usuarioId={conversaAtual.usuario_id}
            nomeUsuario={conversaAtual.usuario}
            conversaId={conversaAtual.conversa_id}
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
              setIsAdicionarOpen(!isAdicionarOpen);
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <ModalAdicionar
            show={isAdicionarOpen}
            onClose={() => setIsAdicionarOpen(false)}
          ></ModalAdicionar>
        </div>
        <div className={styles.positionRelative}>
          <div
            className={
              styles.icon + " " + (isSolicitacoesOpen ? styles.clicado : null)
            }
            onClick={() => {
              isAdicionarOpen && setIsAdicionarOpen(false);
              isMenuOpen && setIsMenuOpen(false);
              setIsSolicitacoesOpen(!isSolicitacoesOpen);
            }}
          >
            <IconeAmizadePendente numeroAmizadesPendentes={5} />
          </div>

          <ModalSolicitacoes
            show={isSolicitacoesOpen}
            onClose={() => setIsSolicitacoesOpen(false)}
          ></ModalSolicitacoes>
        </div>
      </div>
    </div>
  );
}
