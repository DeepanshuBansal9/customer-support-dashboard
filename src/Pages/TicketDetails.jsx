import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTicketById } from "../services/ticketService";
import Badge from "../Components/common/Badge";

function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        setLoading(true);

        const data = await getTicketById(id);

        setTicket(data);
      } catch (error) {
        setError("Failed to load ticket.");
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">
          Loading ticket...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        Ticket not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          {ticket.subject}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Ticket #{ticket.id}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Customer */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">
            Customer Information
          </h2>

          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">
                {ticket.customer.name}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">
                {ticket.customer.email}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">
                {ticket.customer.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Ticket Info */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="font-semibold text-gray-900">
            Ticket Information
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <Badge variant={ticket.priority.toLowerCase()}>
              {ticket.priority}
            </Badge>

            <Badge
              variant={ticket.status
                .toLowerCase()
                .replace(" ", "-")}
            >
              {ticket.status}
            </Badge>
          </div>

          <p className="mt-5 text-gray-600">
            {ticket.description}
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Created:{" "}
            {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>

      </div>

      {/* Conversation */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-gray-900">
          Conversation
        </h2>

        <div className="mt-5 space-y-4">
          {ticket.messages?.length > 0 ? (
            ticket.messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-lg p-4 ${
                  message.sender === "customer"
                    ? "bg-gray-100"
                    : "bg-blue-50"
                }`}
              >
                <div className="flex justify-between">
                  <p className="font-medium text-gray-900">
                    {message.sender === "customer"
                      ? ticket.customer.name
                      : "Support Team"}
                  </p>

                  <span className="text-xs text-gray-400">
                    {new Date(
                      message.timestamp
                    ).toLocaleString()}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {message.message}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              No conversation available.
            </p>
          )}
        </div>
      </div>

    </div>
  );
}

export default TicketDetails;