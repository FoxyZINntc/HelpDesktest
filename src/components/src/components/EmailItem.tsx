import { Email } from "../types";

interface Props {
  email: Email;
  isSelected: boolean;
  onClick: () => void;
}

export default function EmailItem({ email, isSelected, onClick }: Props) {
  return (
    <div
      className={`p-4 border-b border-gray-900 cursor-pointer hover:bg-gray-800 transition
        ${isSelected ? "bg-gray-800" : ""}`}
      onClick={onClick}
    >
      <p className="text-sm text-gray-400">{email.clientName}</p>
      <p className="font-medium">{email.subject}</p>
      <p className="text-xs text-gray-500">{email.time}</p>
    </div>
  );
}
