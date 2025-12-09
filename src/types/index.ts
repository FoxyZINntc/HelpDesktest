export interface Email {
  id: string;
  clientName: string;
  clientEmail: string;
  company: string;
  subject: string;
  body: string;
  time: string;
}

export interface Ticket {
  id: string;
  clientName: string;
  clientEmail: string;
  company: string;
  subject: string;
  description: string;
  time: string;
  status: "aberto" | "em andamento" | "fechado";
}
