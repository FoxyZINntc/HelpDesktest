import { Ticket } from "../types";

let tickets: Ticket[] = [];

export function createTicket(ticket: Ticket) {
  tickets.push(ticket);
  return ticket;
}

export function getTickets() {
  return tickets;
}

export function updateTicketStatus(id: string, status: Ticket["status"]) {
  tickets = tickets.map((t) =>
    t.id === id ? { ...t, status } : t
  );
}

export function clearTickets() {
  tickets = [];
}
