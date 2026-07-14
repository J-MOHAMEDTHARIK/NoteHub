import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createNote } from "../services/noteService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function CreateNote() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNote(formData);

      toast.success("Note created successfully");

      navigate("/home");
    } catch (error) {
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950">
      <Navbar />

      <div className="flex justify-center py-16">
        <div className="w-full max-w-2xl bg-[#121212]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Create Note</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white block mb-2">Title</label>

              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Enter Title"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#1d1d1d] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="text-white block mb-2">Content</label>

              <textarea
                rows="8"
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="Write your note..."
                required
                className="w-full rounded-xl border border-gray-700 bg-[#1d1d1d] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <Link
                to="/home"
                className="px-6 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white transition"
              >
                Create Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
