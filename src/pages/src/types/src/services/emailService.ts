import { Email } from "../types";

export function getEmails(): Email[] {
  return [
    {
      id: crypto.randomUUID(),
      clientName: "João Pereira",
      clientEmail: "joao@empresa.com",
      company: "Empresa XPTO",
      subject: "Problema no Outlook",
      body: "Olá, estou com problema para enviar e-mails. Sempre retorna erro de autenticação.",
      time: "2025-12-09 09:12",
    },
    {
      id: crypto.randomUUID(),
      clientName: "Carla Santos",
      clientEmail: "carla@alphatech.com",
      company: "AlphaTech",
      subject: "Computador travando",
      body: "Bom dia, meu computador está travando ao abrir o sistema interno.",
      time: "2025-12-09 08:55",
    },
    {
      id: crypto.randomUUID(),
      clientName: "Marcos Oliveira",
      clientEmail: "marcos@lojaverde.com",
      company: "Loja Verde",
      subject: "Reset de senha",
      body: "Preciso urgentemente de um reset de senha para acesso ao painel.",
      time: "2025-12-09 08:20",
    },
  ];
}
