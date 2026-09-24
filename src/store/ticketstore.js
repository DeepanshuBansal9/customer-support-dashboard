import { create } from "zustand";
import {
  getTickets,
  updateTicketStatus,
} from "../services/ticketService";

const useTicketStore = create((set) => ({
  tickets: [],

  loading: false,
  error: null,

  search: "",
  statusFilter: "All",
  priorityFilter: "All",

  fetchTickets: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const tickets = await getTickets();

      set({
        tickets,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: "Failed to load tickets.",
      });
    }
  },

  changeTicketStatus: async (id, status) => {
    try {
      const updatedTicket = await updateTicketStatus(
        id,
        status
      );

      set((state) => ({
        tickets: state.tickets.map((ticket) =>
          ticket.id === id
            ? updatedTicket
            : ticket
        ),
      }));
    } catch (error) {
      console.error(error);

      set({
        error: "Failed to update ticket status.",
      });
    }
  },

  setSearch: (search) => {
    set({ search });
  },

  setStatusFilter: (statusFilter) => {
    set({ statusFilter });
  },

  setPriorityFilter: (priorityFilter) => {
    set({ priorityFilter });
  },

  resetFilters: () => {
    set({
      search: "",
      statusFilter: "All",
      priorityFilter: "All",
    });
  },
}));

export default useTicketStore;