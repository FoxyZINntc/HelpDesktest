import { useState } from "react";
import EmailList from "../components/EmailList";
import EmailViewer from "../components/EmailViewer";
import { Email } from "../types";
import { getEmails } from "../services/emailService";
import { useNavigate } from "react-router-dom";

export default function Inbox() {
  const navigate = useNavigate();

  const [emails] = useState<Email[]>(getEmails());
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  const selectedEmail = emails.find((e) => e.id === selectedEmailId) || null;

  function handleOpenTicket(email: Email) {
    navigate("/tickets", { state: { email } });
  }

  return (
    <div className="flex h-full">
      <EmailList
        emails={emails}
        selectedEmailId={selectedEmailId}
        onSelect={setSelectedEmailId}
      />

      <EmailViewer email={selectedEmail} onOpenTicket={handleOpenTicket} />
    </div>
  );
}
