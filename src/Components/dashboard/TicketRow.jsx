import Badge from "../common/Badge";
import useTicketStore from "../../store/ticketstore";
import { Link } from "react-router-dom";
function TicketRow({ ticket }) {
  const changeTicketStatus = useTicketStore(
    (state) => state.changeTicketStatus
  );

  const priorityVariant = ticket.priority.toLowerCase();

  const statusVariant = ticket.status
    .toLowerCase()
    .replace(" ", "-");

  const handleStatusChange = (e) => {
    changeTicketStatus(ticket.id, e.target.value);
  };

  return (
    <div className="border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 last:border-b-0">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <div className="min-w-0 md:w-1/4">
          <p className="font-medium text-gray-900">
            {ticket.customer.name}
          </p>

          <p className="truncate text-sm text-gray-500">
            {ticket.customer.email}
          </p>
        </div>

        <div className="min-w-0 md:w-1/3">
         <Link
  to={`/tickets/${ticket.id}`}
  className="font-medium text-gray-800 hover:text-blue-600"
>
  {ticket.subject}
</Link>

          <p className="mt-1 truncate text-sm text-gray-500">
            {ticket.description}
          </p>
        </div>

        <div className="md:w-24">
          <Badge variant={priorityVariant}>
            {ticket.priority}
          </Badge>
        </div>

        <div className="md:w-32">
          <select
            value={ticket.status}
            onChange={handleStatusChange}
            className="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-sm outline-none focus:border-blue-500"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="md:w-28">
          <Badge variant={statusVariant}>
            {ticket.status}
          </Badge>
        </div>

        <div className="md:w-28">
          <span className="text-sm text-gray-500">
            {new Date(ticket.createdAt).toLocaleDateString()}
          </span>
        </div>

      </div>
    </div>
  );
}

export default TicketRow;