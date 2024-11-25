import styles from "./ModalAdicionar.module.css";
import Modal from "../Modal/Modal";
import CampoForm from "../CampoForm/CampoForm";
import BotaoForm from "../BotaoForm/BotaoForm";
import { useState } from "react";
import ErroForm from "../ErroForm/ErroForm";
import { AuthContext } from "../../contextos/AuthContext";
import { useContext, useEffect } from "react";
import validator from "validator";
import SucessoForm from "../SucessoForm/SucessoForm";
import {
  enviarSolicitacao,
  cancelarRetornoSolicitarAmizadeSucesso,
  cancelarRetornoSolicitarAmizadeErro,
  retornoSolicitarAmizadeSucesso,
  retornoSolicitarAmizadeErro,
} from "../../socket";

export default function ModalAdicionar({ show, children, onClose }) {
  const [busca, setBusca] = useState("");

  const { socketConectado, autenticado } = useContext(AuthContext);

  const [errosForm, setErrosForm] = useState({
    usuarioMinMaxCaracteresErro: false,
    usuarioNaoEncontradoErro: false,
    pedidoJaRealizadoErro: false,
    usuarioJaAdicionadoErro: false,
  });
  const [sucessosForm, setSucessosForm] = useState({
    solicitacaoEnviadaSucesso: false,
    usuarioAdicionadoSucesso: false,
  });

  useEffect(() => {
    if (socketConectado) {
      retornoSolicitarAmizadeErro((dados) => {
        if (dados.status === 409) {
          setErrosForm((prevErrosForm) => ({
            ...prevErrosForm,
            ...dados.erros,
          }));
        }
      });
    }

    return () => {
      cancelarRetornoSolicitarAmizadeErro();
    };
  }, [socketConectado]);

  function handleAdicionar(e) {
    e.preventDefault();
    setErrosForm({
      usuarioMinMaxCaracteresErro: false,
      usuarioNaoEncontradoErro: false,
      pedidoJaRealizadoErro: false,
      usuarioJaAdicionadoErro: false,
    });
    let formValido = true;
    if (socketConectado && autenticado) {
      if (!validator.isLength(busca, { min: 4, max: 16 })) {
        formValido = false;
        setErrosForm((prevErrosForm) => ({
          ...prevErrosForm,
          usuarioMinMaxCaracteresErro: true,
        }));
      }

      if (formValido) {
        setErrosForm({
          usuarioMinMaxCaracteresErro: false,
          usuarioNaoEncontradoErro: false,
          pedidoJaRealizadoErro: false,
          usuarioJaAdicionadoErro: false,
        });
        enviarSolicitacao({
          busca,
        });
      }
    }
  }

  return show ? (
    <div className={styles.modalAdicionar}>
      <Modal
        titulo="Adicionar"
        onClose={() => {
          setBusca("");
          setErrosForm({
            usuarioMinMaxCaracteresErro: false,
            usuarioNaoEncontradoErro: false,
            pedidoJaRealizadoErro: false,
            usuarioJaAdicionadoErro: false,
          });
          setSucessosForm({
            solicitacaoEnviadaSucesso: false,
            usuarioAdicionadoSucesso: false,
          });
          onClose();
        }}
      >
        <form
          onSubmit={(e) => {
            handleAdicionar(e);
          }}
        >
          <CampoForm
            value={busca}
            type="text"
            placeholder="Usuário"
            onChange={(e) => setBusca(e.target.value)}
            erro={
              errosForm.usuarioMinMaxCaracteresErro ||
              errosForm.usuarioNaoEncontradoErro ||
              errosForm.pedidoJaRealizadoErro ||
              errosForm.usuarioJaAdicionadoErro
            }
            sucesso={
              sucessosForm.solicitacaoEnviadaSucesso ||
              sucessosForm.usuarioAdicionadoSucesso
            }
          />
          {errosForm.usuarioMinMaxCaracteresErro && (
            <ErroForm mensagem="Usuário deve ter de 4 até 16 caracteres." />
          )}
          {errosForm.usuarioNaoEncontradoErro && (
            <ErroForm mensagem="Usuário não encontrado." />
          )}
          {errosForm.pedidoJaRealizadoErro && (
            <ErroForm mensagem="Solicitação ja realizada." />
          )}
          {errosForm.usuarioJaAdicionadoErro && (
            <ErroForm mensagem="Usário ja adicionado." />
          )}

          {sucessosForm.solicitacaoEnviadaSucesso && (
            <SucessoForm mensagem="Solicitação enviada com sucesso."></SucessoForm>
          )}

          {sucessosForm.usuarioAdicionadoSucesso && (
            <SucessoForm mensagem="Usuário adicionado com sucesso."></SucessoForm>
          )}

          <BotaoForm titulo="Adicionar" type="submit" />
        </form>
      </Modal>
    </div>
  ) : null;
}
