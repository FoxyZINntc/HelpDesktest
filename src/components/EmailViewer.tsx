import { Email } from "../types";

interface Props {
  email: Email | null;
  onOpenTicket: (email: Email) => void;
}

export default function EmailViewer({ email, onOpenTicket }: Props) {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-600">
        Selecione um e-mail à esquerda.
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-2">{email.subject}</h2>

      <div className="text-gray-400 text-sm mb-4">
        <p><strong>Cliente:</strong> {email.clientName}</p>
        <p><strong>Email:</strong> {email.clientEmail}</p>
        <p><strong>Empresa:</strong> {email.company}</p>
        <p><strong>Horário:</strong> {email.time}</p>
      </div>

      <div className="bg-[#0f0f0f] p-4 rounded border border-gray-800 mb-6">
        {email.body}
      </div>

      <button
        onClick={() => onOpenTicket(email)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
      >
        Abrir Chamado
      </button>
    </div>
  );
}
