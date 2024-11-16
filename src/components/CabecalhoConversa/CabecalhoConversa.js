import styles from "./CabecalhoConversa.module.css";
import { useContext, useState } from "react";
import { ChatContext } from "../../contextos/ChatContext";
import CardContato from "../CardContato/CardContato";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconeAmizadePendente from "../IconeAmizadePendente/IconeAmizadePendente";
import Modal from "../Modal/Modal";
import ModalSolicitacoes from "../ModalSolicitacoes/ModalSolicitacoes";
import ModalAdicionar from "../ModalAdicionar/ModalAdicionar";

export default function CabecalhoConversa() {
  const { conversaAtual } = useContext(ChatContext);
  const [isSolicitacoesOpen, setIsSolicitacoesOpen] = useState(false);
  const [isAdicionarOpen, setIsAdicionarOpen] = useState(false);

  return (
    <div className={styles.cabecalho}>
      {conversaAtual && (
        <div className={styles.caixaCardContato}>
          <CardContato
            key={conversaAtual.conversa_id}
            usuarioId={conversaAtual.usuario_id}
            nomeUsuario={conversaAtual.usuario}
            conversaId={conversaAtual.conversa_id}
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
              setIsAdicionarOpen(!isAdicionarOpen);
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </i>
          <ModalAdicionar
            show={isAdicionarOpen}
            onClose={() => setIsAdicionarOpen(false)}
          ></ModalAdicionar>
        </div>
        <div className={styles.positionRelative}>
          <i
            className={styles.icon}
            onClick={() => {
              isAdicionarOpen && setIsAdicionarOpen(false);
              setIsSolicitacoesOpen(!isSolicitacoesOpen);
            }}
          >
            <IconeAmizadePendente numeroAmizadesPendentes={5} />
          </i>

          <ModalSolicitacoes
            show={isSolicitacoesOpen}
            onClose={() => setIsSolicitacoesOpen(false)}
          ></ModalSolicitacoes>
        </div>
      </div>
    </div>
  );
}
