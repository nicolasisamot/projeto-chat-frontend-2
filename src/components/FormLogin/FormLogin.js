import Form from "../Form/Form";
import CampoForm from "../CampoForm/CampoForm";
import BotaoForm from "../BotaoForm/BotaoForm";
import ErroForm from "../ErroForm/ErroForm";
import validator from "validator";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contextos/AuthContext";

import {
  fazerLogin,
  retornoFazerLoginErro,
  retornoFazerLoginSucesso,
  cancelarRetornoFazerLoginSucesso,
  cancelarRetornoFazerLoginErro,
} from "../../socket";

function FormLogin() {
  const { socketConectado, login } = useContext(AuthContext);

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [errosForm, setErrosForm] = useState({
    usuarioOuSenhaIncorretos: false,
  });

  useEffect(() => {
    if (socketConectado) {
      retornoFazerLoginSucesso((dados) => {
        const { token } = dados;
        login(token);
      });
      retornoFazerLoginErro((dados) => {
        if (dados.status === 401) {
          setErrosForm({
            usuarioOuSenhaIncorretos: true,
          });
        }
      });
    }

    return () => {
      cancelarRetornoFazerLoginSucesso();
      cancelarRetornoFazerLoginErro();
    };
  }, [socketConectado]);

  function handleSubmit(e) {
    e.preventDefault();
    let formValido = true;

    if (!validator.isLength(usuario, { min: 4, max: 16 })) {
      formValido = false;
    }

    if (!validator.isLength(senha, { min: 8, max: 42 })) {
      formValido = false;
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
      fazerLogin({ usuario, senha });
    } else {
      setErrosForm({
        usuarioOuSenhaIncorretos: true,
      });
    }
  }

  return (
    <Form
      titulo="Login"
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <CampoForm
        value={usuario}
        label="Usuário"
        type="text"
        erro={errosForm.usuarioOuSenhaIncorretos}
        onChange={(e) => {
          setUsuario(e.target.value);
        }}
      />

      {errosForm.usuarioOuSenhaIncorretos && (
        <ErroForm mensagem="Usuário incorreto." />
      )}
      <CampoForm
        value={senha}
        label="Senha"
        type="password"
        erro={errosForm.usuarioOuSenhaIncorretos}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
      />

      {errosForm.usuarioOuSenhaIncorretos && (
        <ErroForm mensagem="Senha incorreta." />
      )}

      <BotaoForm titulo="Entrar" type="submit" />
    </Form>
  );
}

export default FormLogin;
