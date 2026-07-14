import { Link } from "react-router-dom";
import { SquarePen, Trash2, Heart } from "lucide-react";

function NoteCard({ note, onDelete, onFavorite }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#171717] border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
      {/* Clickable Content */}
      <Link to={`/note/${note._id}`} className="block p-6 cursor-pointer">
        <h2 className="text-lg font-semibold text-white tracking-wide truncate">
          {note.title}
        </h2>

        <p className="mt-3 text-sm text-gray-400 leading-7 min-h-[84px]">
          {note.content.length > 120
            ? note.content.substring(0, 120) + "..."
            : note.content}
        </p>
      </Link>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {formatDate(note.createdAt)}
        </span>

        <div className="flex items-center gap-2">
          {/* Favorite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(note._id);
            }}
            className="p-2 rounded-full transition-all duration-200 hover:scale-110"
            title={
              note.isFavorite ? "Remove from Favorites" : "Add to Favorites"
            }
          >
            <Heart
              size={18}
              className={
                note.isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 hover:text-red-500"
              }
            />
          </button>

          {/* Edit */}
          <Link
            to={`/edit/${note._id}`}
            className="p-2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
            title="Edit Note"
          >
            <SquarePen size={18} />
          </Link>

          {/* Delete */}
          <button
            onClick={() => onDelete(note._id)}
            className="p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all duration-200"
            title="Delete Note"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
