import { Email, Ticket } from "../types";
import { useState } from "react";

interface Props {
  email: Email | null;
  onSubmit: (ticket: Ticket) => void;
}

export default function TicketForm({ email, onSubmit }: Props) {
  const [description, setDescription] = useState(email?.body || "");

  if (!email) {
    return (
      <div className="text-gray-600">
        Nenhum e-mail selecionado para abrir chamado.
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const ticket: Ticket = {
      id: crypto.randomUUID(),
      clientName: email.clientName,
      clientEmail: email.clientEmail,
      company: email.company,
      subject: email.subject,
      time: email.time,
      description,
      status: "aberto",
    };

    onSubmit(ticket);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] p-6 rounded border border-gray-800"
    >
      <h2 className="text-xl font-bold mb-4">Novo Chamado</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-400">Cliente</label>
          <input
            type="text"
            value={email.clientName}
            disabled
            className="w-full p-2 bg-[#0d0d0d] border border-gray-700 rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Empresa</label>
          <input
            type="text"
            value={email.company}
            disabled
            className="w-full p-2 bg-[#0d0d0d] border border-gray-700 rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="text"
            value={email.clientEmail}
            disabled
            className="w-full p-2 bg-[#0d0d0d] border border-gray-700 rounded"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Assunto</label>
          <input
            type="text"
            value={email.subject}
            disabled
            className="w-full p-2 bg-[#0d0d0d] border border-gray-700 rounded"
          />
        </div>
      </div>

      <label className="text-sm text-gray-400">Descrição</label>
      <textarea
        className="w-full p-3 bg-[#0d0d0d] border border-gray-700 rounded h-40"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
      >
        Criar Chamado
      </button>
    </form>
  );
}
