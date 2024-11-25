import Form from "../Form/Form";
import CampoForm from "../CampoForm/CampoForm";
import BotaoForm from "../BotaoForm/BotaoForm";
import ErroForm from "../ErroForm/ErroForm";
import validator from "validator";
import { cadastrarUsuario } from "../../socket";
import {
  retornoCadastrarUsuarioSucesso,
  cancelarRetornoCadastrarUsuarioSucesso,
  retornoCadastrarUsuarioErro,
  cancelarRetornoCadastrarUsuarioErro,
} from "../../socket";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextos/AuthContext";

import { useState, useEffect, useContext } from "react";

function FormCadastro() {
  const { socketConectado } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [email, setEmail] = useState("");
  const [errosForm, setErrosForm] = useState({
    usuarioMinMaxCaracteresErro: false,
    usuarioJaExisteErro: false,
    senhaMinMaxCaracteresErro: false,
    senhasNaoConferemErro: false,
    emailFormatoInvalidoErro: false,
    emailJaExisteErro: false,
  });

  useEffect(() => {
    if (socketConectado) {
      retornoCadastrarUsuarioSucesso((dados) => {
        navigate("/login");
      });
      retornoCadastrarUsuarioErro((dados) => {
        if (dados.status === 409) {
          setErrosForm((prevErrosForm) => ({
            usuarioMinMaxCaracteresErro: false,
            senhaMinMaxCaracteresErro: false,
            senhasNaoConferemErro: false,
            emailFormatoInvalidoErro: false,
            ...dados.erros,
          }));
        }
      });
    }
    return () => {
      if (socketConectado) {
        cancelarRetornoCadastrarUsuarioSucesso();
        cancelarRetornoCadastrarUsuarioErro();
      }
    };
  }, [socketConectado]);

  function handleSubmit(e) {
    e.preventDefault();

    // setErrosForm((prevErrosForm) => ({
    //   ...prevErrosForm,
    //  emailJaExisteErro: false,
    //   usuarioJaExisteErro: false,
    //}));
    setErrosForm({
      usuarioMinMaxCaracteresErro: false,
      usuarioJaExisteErro: false,
      senhaMinMaxCaracteresErro: false,
      senhasNaoConferemErro: false,
      emailFormatoInvalidoErro: false,
      emailJaExisteErro: false,
    });

    let formValido = true;

    if (!validator.isLength(usuario, { min: 4, max: 16 })) {
      formValido = false;
      setErrosForm((prevErrosForm) => ({
        ...prevErrosForm,
        usuarioMinMaxCaracteresErro: true,
      }));
    }

    if (!validator.isLength(senha, { min: 8, max: 42 })) {
      formValido = false;
      setErrosForm((prevErrosForm) => ({
        ...prevErrosForm,
        senhaMinMaxCaracteresErro: true,
      }));
    }

    if (!validator.equals(senha, confirmarSenha)) {
      formValido = false;
      setErrosForm((prevErrosForm) => ({
        ...prevErrosForm,
        senhasNaoConferemErro: true,
      }));
    }

    if (!validator.isEmail(email)) {
      formValido = false;
      setErrosForm((prevErrosForm) => ({
        ...prevErrosForm,
        emailFormatoInvalidoErro: true,
      }));
    }

    if (formValido) {
      setErrosForm({
        usuarioMinMaxCaracteresErro: false,
        usuarioJaExisteErro: false,
        senhaMinMaxCaracteresErro: false,
        senhasNaoConferemErro: false,
        emailFormatoInvalidoErro: false,
        emailJaExisteErro: false,
      });
      cadastrarUsuario({ usuario, senha, email });
    }
  }
  return (
    <Form
      titulo="Cadastro"
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <CampoForm
        value={usuario}
        label="Usuário"
        type="text"
        erro={
          errosForm.usuarioMinMaxCaracteresErro || errosForm.usuarioJaExisteErro
        }
        onChange={(e) => {
          setUsuario(e.target.value);
        }}
      />
      {errosForm.usuarioMinMaxCaracteresErro && (
        <ErroForm mensagem="Usuário deve ter de 4 até 16 caracteres." />
      )}
      {errosForm.usuarioJaExisteErro && (
        <ErroForm mensagem="Este nome de usuário já está sendo utilizado." />
      )}
      <CampoForm
        value={senha}
        label="Senha"
        type="password"
        erro={
          errosForm.senhaMinMaxCaracteresErro || errosForm.senhasNaoConferemErro
        }
        onChange={(e) => {
          setSenha(e.target.value);
        }}
      />
      {errosForm.senhaMinMaxCaracteresErro && (
        <ErroForm mensagem="Senha deve ter de 8 até 42 caracteres." />
      )}

      <CampoForm
        value={confirmarSenha}
        label="Confirmar Senha"
        type="password"
        erro={errosForm.senhasNaoConferemErro}
        onChange={(e) => {
          setConfirmarSenha(e.target.value);
        }}
      />
      {errosForm.senhasNaoConferemErro && (
        <ErroForm mensagem="As senhas não conferem." />
      )}

      <CampoForm
        value={email}
        label="E-mail"
        type="text"
        erro={errosForm.emailFormatoInvalidoErro || errosForm.emailJaExisteErro}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errosForm.emailFormatoInvalidoErro && (
        <ErroForm mensagem="Utilize um e-mail valido." />
      )}

      {errosForm.emailJaExisteErro && (
        <ErroForm mensagem="Este e-mail já está sendo utilizado." />
      )}
      <BotaoForm titulo="Cadastrar" type="submit" />
    </Form>
  );
}

export default FormCadastro;
