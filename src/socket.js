import { io } from "socket.io-client";

export let socket;

export const connectSocket = async (token) => {
  const conexao = new Promise((resolve, reject) => {
    socket = io("http://localhost:3001", {
      auth: {
        token: token || null,
      },
    });

    socket.on("connect", () => {
      resolve(socket);
      console.log("socket connected");
    });
    socket.on("connect_error", (error) => {
      reject(error);
      console.log("Erro ao conectar ao servidor");
    });
    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });
  });
  return await conexao;
};

export const cadastrarUsuario = (dados) => {
  socket.emit("cadastrar_usuario", dados);
};

export const retornoCadastrarUsuarioErro = (callback) => {
  if (socket) {
    socket.on("cadastrar_usuario_erro_interface", (dados) => {
      callback(dados);
    });
  }
};
export const cancelarRetornoCadastrarUsuarioErro = () => {
  if (socket) {
    socket.off("cadastrar_usuario_erro_interface");
  }
};

export const retornoCadastrarUsuarioSucesso = (callback) => {
  if (socket) {
    socket.on("cadastrar_usuario_sucesso_interface", (dados) => {
      callback(dados);
    });
  }
};
export const cancelarRetornoCadastrarUsuarioSucesso = () => {
  if (socket) {
    socket.off("cadastrar_usuario_sucesso_interface");
  }
};

////////////////////////////////////////////////////////////

export const fazerLogin = (dados) => {
  socket.emit("fazer_login", dados);
};

export const retornoFazerLoginErro = (callback) => {
  if (socket) {
    socket.on("fazer_login_erro_interface", (dados) => {
      callback(dados);
    });
  }
};
export const cancelarRetornoFazerLoginErro = () => {
  if (socket) {
    socket.off("fazer_login_erro_interface");
  }
};

export const retornoFazerLoginSucesso = (callback) => {
  if (socket) {
    socket.on("fazer_login_sucesso_interface", (dados) => {
      callback(dados);
    });
  }
};
export const cancelarRetornoFazerLoginSucesso = () => {
  if (socket) {
    socket.off("fazer_login_sucesso_interface");
  }
};
//////

export const pegarConversas = () => {
  socket.emit("pegar_conversas");
};

export const retornoPegarConversas = (callback) => {
  if (socket) {
    socket.on("pegar_conversas_sucesso_interface", (dados) => {
      callback(dados);
    });
  }
};

export const cancelarRetornoPegarConversas = () => {
  if (socket) {
    socket.off("pegar_conversas_sucesso_interface");
  }
};

export const cadastrarMensagem = (dados) => {
  socket.emit("cadastrar_mensagem", dados);
};
export const retornoNovaMensagem = (callback) => {
  if (socket) {
    socket.on("nova_mensagem_sucesso_interface", (dados) => {
      console.log("mensagem recebida");
      callback(dados);
    });
  }
};

export const cancelarRetornoNovaMensagem = () => {
  if (socket) {
    socket.off("nova_mensagem_sucesso_interface");
  }
};

/////////

export const enviarSolicitacao = (dados) => {
  if (socket) {
    socket.emit("enviar_solicitacao_amizade", dados);
  }
};

export const retornoSolicitarAmizadeSucesso = (callback) => {
  if (socket) {
    socket.on("enviar_solicitacao_amizade_sucesso_interface", (dados) => {
      callback(dados);
    });
  }
};

export const cancelarRetornoSolicitarAmizadeSucesso = () => {
  if (socket) {
    socket.off("enviar_solicitacao_amizade_sucesso_interface");
  }
};

export const retornoSolicitarAmizadeErro = (callback) => {
  if (socket) {
    socket.on("enviar_solicitacao_amizade_erro_interface", (dados) => {
      callback(dados);
    });
  }
};
export const cancelarRetornoSolicitarAmizadeErro = () => {
  if (socket) {
    socket.off("enviar_solicitacao_amizade_erro_interface");
  }
};
