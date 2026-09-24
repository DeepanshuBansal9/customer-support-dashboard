import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import TicketDetails from "./Pages/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets/:id" element={<TicketDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;