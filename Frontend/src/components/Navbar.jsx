import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { NotebookPen, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { confirmLogout } from "../utils/confirmLogout";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    const ok = await confirmLogout();

    if (!ok) return;

    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <nav className="bg-[#111827]/80 backdrop-blur-xl border-b border-cyan-400/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NotebookPen
            size={32}
            className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
          />

          <h1 className="text-2xl font-semibold tracking-wide text-white">
            Note<span className="text-cyan-400">Hub</span>
          </h1>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                     bg-red-500/10 border border-red-500/30
                     text-red-400
                     hover:bg-red-500 hover:text-white
                     hover:border-red-500
                     transition-all duration-300"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
