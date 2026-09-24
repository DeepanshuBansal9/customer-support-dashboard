import axios from "axios";

const API_URL = "http://localhost:3001";

export const getTickets = async () => {
  const response = await axios.get(`${API_URL}/tickets`);

  return response.data;
};

export const getTicketById = async (id) => {
  const response = await axios.get(`${API_URL}/tickets/${id}`);

  return response.data;
};

export const updateTicketStatus = async (id, status) => {
  const response = await axios.patch(
    `${API_URL}/tickets/${id}`,
    {
      status,
    }
  );

  return response.data;
};