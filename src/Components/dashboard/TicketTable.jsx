import TicketRow from "./TicketRow";

function TicketTable({ tickets }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      
      {/* Header */}
      <div className="hidden border-b border-gray-200 bg-gray-50 px-5 py-3 md:block">
        <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500">
          <div className="w-1/4">Customer</div>
          <div className="w-1/3">Issue</div>
          <div className="w-24">Priority</div>
          <div className="w-28">Status</div>
          <div className="w-28">Created</div>
        </div>
      </div>

      {/* Tickets */}
      {tickets.map((ticket) => (
        <TicketRow
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </div>
  );
}

export default TicketTable;