import { Email } from "../types";

interface Props {
  emails: Email[];
  selectedEmailId: string | null;
  onSelect: (id: string) => void;
}

export default function EmailList({ emails, selectedEmailId, onSelect }: Props) {
  return (
    <div className="w-80 bg-[#111] border-r border-gray-800 overflow-y-auto">
      {emails.map((email) => (
        <button
          key={email.id}
          className={`w-full text-left p-4 border-b border-gray-900 cursor-pointer hover:bg-gray-800 transition
            ${selectedEmailId === email.id ? "bg-gray-800" : ""}`}
          onClick={() => onSelect(email.id)}
        >
          <p className="text-sm text-gray-400">{email.clientName}</p>
          <p className="font-medium text-gray-200">{email.subject}</p>
          <p className="text-xs text-gray-500">{email.time}</p>
        </button>
      ))}
    </div>
  );
}
