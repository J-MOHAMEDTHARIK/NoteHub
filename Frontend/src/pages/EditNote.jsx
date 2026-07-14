import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

import { getNoteById, updateNote } from "../services/noteService";

function EditNote() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    try {
      const data = await getNoteById(id);

      setFormData({
        title: data.title,
        content: data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateNote(id, formData);

      toast.success("Note updated successfully");

      navigate("/home");
    } catch (error) {
      toast.error("Failed to update note");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950">
      <Navbar />

      <div className="flex justify-center py-16">
        <div className="w-full max-w-2xl bg-[#121212]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Edit Note</h1>

            <Link
              to="/home"
              className="px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white"
            >
              Cancel
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white block mb-2">Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-700 bg-[#1d1d1d] px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="text-white block mb-2">Content</label>

              <textarea
                rows="8"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-700 bg-[#1d1d1d] px-4 py-3 text-white"
              />
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
              Update Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditNote;
