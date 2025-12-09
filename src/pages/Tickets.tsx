import { useLocation } from "react-router-dom";
import TicketForm from "../components/TicketForm";
import { Ticket, Email } from "../types";
import { useState } from "react";

export default function Tickets() {
  const location = useLocation();
  const emailFromInbox = location.state?.email as Email | null;

  const [tickets, setTickets] = useState<Ticket[]>([]);

  function handleCreateTicket(ticket: Ticket) {
    setTickets((prev) => [...prev, ticket]);
    alert("Chamado criado com sucesso!");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Chamados</h1>

      <TicketForm email={emailFromInbox} onSubmit={handleCreateTicket} />

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Chamados Criados</h2>

        {tickets.length === 0 && (
          <p className="text-gray-500">Nenhum chamado criado ainda.</p>
        )}

        {tickets.map((t) => (
          <div
            key={t.id}
            className="bg-[#111] p-4 rounded border border-gray-800 mb-3"
          >
            <p><strong>Cliente:</strong> {t.clientName}</p>
            <p><strong>Email:</strong> {t.clientEmail}</p>
            <p><strong>Empresa:</strong> {t.company}</p>
            <p><strong>Assunto:</strong> {t.subject}</p>
            <p><strong>Status:</strong> {t.status}</p>
            <p className="mt-2 text-gray-400">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
