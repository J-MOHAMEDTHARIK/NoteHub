import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, SquarePen, CalendarDays } from "lucide-react";

import Navbar from "../components/Navbar";
import { getNoteById } from "../services/noteService";

function ViewNote() {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    try {
      const data = await getNoteById(id);
      setNote(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!note) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-indigo-950">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Top Buttons */}

        <div className="flex justify-between items-center mb-8">
          <Link
            to="/home"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#171717]/80 backdrop-blur-xl border border-slate-700 text-white hover:border-cyan-400 transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            to={`/edit/${note._id}`}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white transition"
          >
            <SquarePen size={18} />
            Edit
          </Link>
        </div>

        {/* Note Card */}

        <div className="bg-[#171717]/80 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}

          <div className="border-b border-slate-800 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white break-words">
              {note.title}
            </h1>

            <div className="flex items-center gap-2 mt-5 text-gray-400 text-sm">
              <CalendarDays size={16} />

              <span>Created : {formatDate(note.createdAt)}</span>
            </div>
          </div>

          {/* Scrollable Content */}

          <div className="h-[500px] overflow-y-auto p-8 custom-scroll">
            <p className="text-gray-300 leading-9 whitespace-pre-wrap text-[17px]">
              {note.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewNote;
