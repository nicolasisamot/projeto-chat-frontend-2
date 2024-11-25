import styles from "./ListaContatos.module.css";
import CardContato from "../CardContato/CardContato.js";
import CampoForm from "../CampoForm/CampoForm.js";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contextos/AuthContext";
import { ChatContext } from "../../contextos/ChatContext";
import {
  pegarConversas,
  retornoPegarConversas,
  cancelarRetornoPegarConversas,
} from "../../socket";

export default function ListaContatos() {
  const { socketConectado } = useContext(AuthContext);
  const { conversas, setConversas } = useContext(ChatContext);
  const [busca, setBusca] = useState("");
  useEffect(() => {
    if (socketConectado) {
      retornoPegarConversas((conversasRecebidas) => {
        setConversas(ordenarConversas(conversasRecebidas));
      });
      pegarConversas();
    }

    return () => {
      cancelarRetornoPegarConversas();
    };
  }, [socketConectado]);

  const ordenarConversas = (conversas) => {
    return conversas.sort(
      (a, b) =>
        new Date(b.data_ultima_mensagem) - new Date(a.data_ultima_mensagem)
    );
  };
  const conversasFiltradas = conversas.filter((conversa) =>
    conversa.usuario.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.contatos}>
      <CampoForm
        placeholder="Buscar contato"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      {conversasFiltradas.map((conversa) => {
        return (
          <div key={conversa.id} className={styles.caixaCardContato}>
            <CardContato
              key={conversa.id}
              usuarioId={conversa.id}
              nomeUsuario={conversa.usuario}
              conversaId={conversa.conversa_id}
<<<<<<< HEAD
=======
              fotoUsuario="https://github.com/nicolasisamot.png"
>>>>>>> 6d10a3fd3591cb8b4324e4d27d86a4909c4215e4
              novasMensagens={0}
              amigo={true}
            />
          </div>
        );
      })}
    </div>
  );
}
