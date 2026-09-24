import PageHeader from "../Components/common/PageHeader";
import StatCard from "../Components/dashboard/StatCard";
import { useEffect} from "react";
import TicketTable from "../Components/dashboard/TicketTable";
import TicketFilters from "../Components/dashboard/TicketFilters";
import useTicketStore from "../store/ticketstore";
function Dashboard() {
    const tickets = useTicketStore((state) => state.tickets);
const search = useTicketStore((state) => state.search);
const setSearch = useTicketStore((state) => state.setSearch);
const statusFilter = useTicketStore(
  (state) => state.statusFilter
);
const fetchTickets = useTicketStore(
  (state) => state.fetchTickets
);

const loading = useTicketStore(
  (state) => state.loading
);

const error = useTicketStore(
  (state) => state.error
);
useEffect(() => {
  fetchTickets();
}, [fetchTickets]);
const setStatusFilter = useTicketStore(
  (state) => state.setStatusFilter
);

const priorityFilter = useTicketStore(
  (state) => state.priorityFilter
);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [priorityFilter, setPriorityFilter] = useState("All");
     const totalTickets = tickets.length;

      const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets=tickets.filter((ticket) => ticket.status==="In Progress").length;
  const resolvedTickets=tickets.filter((ticket)=>ticket.status==="Resolved").length;

  const filteredTickets=tickets.filter((ticket)=>{
    const searchValue=search.toLowerCase();
    const matchesSearch=
    ticket.customer.name.toLowerCase().includes(searchValue)||
    ticket.customer.email.toLowerCase().includes(searchValue)||
    ticket.subject.toLowerCase().includes(searchValue);
    const matchesStatus=
    statusFilter==="All" || ticket.status===statusFilter;
    const matchespriority=
    priorityFilter==="All" || ticket.priority===priorityFilter;
    return (matchesSearch && matchesStatus && matchespriority);
  });
      return (
    
    <div>
      <PageHeader
        title="Customer Support Dashboard"
        description="Manage and track customer support tickets."
      />
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Tickets"
       value={totalTickets} 
       description="Number of tickets in the system." />
      
       <StatCard
          title="Open"
          value={openTickets}
          description="Tickets waiting for response"
        />
         <StatCard
          title="In Progress"
          value={inProgressTickets}
          description="Tickets being handled"
        />
        <StatCard
          title="Resolved"
          value={resolvedTickets}
          description="Successfully resolved"
        />
         </div>
   <section className="mt-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Support Tickets
          </h2>

          <p className="text-sm text-gray-500">
            View and manage customer support requests.
          </p>
        </div>
      <TicketFilters />
        <TicketTable tickets={filteredTickets} />
      </section>
    </div>
      

  );
}

export default Dashboard;