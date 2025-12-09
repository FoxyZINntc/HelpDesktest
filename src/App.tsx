import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Inbox from "./pages/Inbox";
import Tickets from "./pages/Tickets";

export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

