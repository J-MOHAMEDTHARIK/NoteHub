import { useEffect, useState } from "react";
import { SquarePen, Search } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { confirmDelete } from "../utils/confirmDelete";

import { getNotes, deleteNote, toggleFavorite } from "../services/noteService";

function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load notes");
    }
  };

  const handleDelete = async (id) => {
    const ok = await confirmDelete();

    if (!ok) return;

    try {
      await deleteNote(id);

      toast.success("Note deleted successfully");

      loadNotes();
    } catch {
      toast.error("Unable to delete note");
    }
  };

  const handleFavorite = async (id) => {
    try {
      const updatedNote = await toggleFavorite(id);

      setNotes((prev) =>
        prev.map((note) => (note._id === id ? updatedNote : note)),
      );

      toast.success(
        updatedNote.isFavorite
          ? "❤️ Added to Favorites"
          : "💔 Removed from Favorites",
      );
    } catch (error) {
      console.log(error);
      toast.error("Unable to update favorite");
    }
  };

  // Search + Favorites First
  const filteredNotes = notes
    .filter((note) => {
      const keyword = search.toLowerCase();

      return (
        note.title.toLowerCase().includes(keyword) ||
        note.content.toLowerCase().includes(keyword)
      );
    })
    .sort((a, b) => {
      if (a.isFavorite === b.isFavorite) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      return b.isFavorite - a.isFavorite;
    });

  return (
    <div className="h-screen overflow-y-auto custom-scroll bg-gradient-to-br from-black via-slate-950 to-indigo-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <span className="text-cyan-400 uppercase tracking-[0.25em] text-xs">
            Dashboard
          </span>

          <h1 className="text-2xl font-semibold text-white mt-2">Your Notes</h1>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl bg-[#161b22]/80 border border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none py-4 pl-14 pr-5 text-white placeholder:text-slate-500 transition-all"
          />
        </div>

        {/* Notes */}
        {filteredNotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24">
            <Search size={60} className="text-slate-600 mb-5" />

            <h2 className="text-2xl font-semibold text-white">
              No Notes Found
            </h2>

            <p className="text-slate-500 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={handleDelete}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating Button */}
      <Link
        to="/create"
        className="fixed bottom-8 right-8 flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
      >
        <SquarePen size={22} />
        <span className="font-medium">New Note</span>
      </Link>
    </div>
  );
}

export default Home;
