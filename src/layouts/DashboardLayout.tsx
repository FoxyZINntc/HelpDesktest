import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  const menu = [
    { name: "Inbox", path: "/" },
    { name: "Chamados", path: "/tickets" },
  ];

  return (
    <div className="flex h-screen bg-[#0d0d0d] text-gray-200">

      {/* Sidebar */}
      <aside className="w-60 bg-[#111] border-r border-gray-800 flex flex-col">
        <h1 className="text-xl font-bold p-4 border-b border-gray-800">HelpDesk</h1>

        <nav className="flex flex-col">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`p-4 border-b border-gray-900 hover:bg-gray-800 transition-colors
                ${location.pathname === item.path ? "bg-gray-800" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
