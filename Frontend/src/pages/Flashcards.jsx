import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

function Flashcards() {
  const location = useLocation();
  const navigate = useNavigate();

  const flashcards = location.state?.flashcards || [];
  const title = location.state?.title || "Flashcards";

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">No Flashcards Found</h1>

        <button
          onClick={() => navigate("/home")}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const card = flashcards[current];

  const nextCard = () => {
    if (current < flashcards.length - 1) {
      setCurrent(current + 1);
      setShowAnswer(false);
    }
  };

  const previousCard = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft size={20} />
          Back to Notes
        </button>

        <h1 className="text-4xl font-bold mt-6">{title}</h1>

        <p className="text-cyan-400 mt-2">
          Card {current + 1} of {flashcards.length}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-3 mt-5 overflow-hidden">
          <div
            className="bg-cyan-500 h-3 transition-all duration-300"
            style={{
              width: `${((current + 1) / flashcards.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex justify-center mt-14">
        <div className="w-full max-w-3xl bg-[#171717] rounded-3xl border border-cyan-500 shadow-xl p-10">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Question</h2>

          <p className="text-xl leading-8">{card.question}</p>

          {showAnswer && (
            <>
              <hr className="my-8 border-slate-700" />

              <h2 className="text-2xl font-bold text-green-400 mb-5">Answer</h2>

              <p className="text-lg leading-8 text-gray-300">{card.answer}</p>
            </>
          )}

          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-12 pb-10">
        <button
          onClick={previousCard}
          disabled={current === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 disabled:opacity-40 hover:bg-slate-700 transition"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <button
          onClick={nextCard}
          disabled={current === flashcards.length - 1}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:opacity-40 transition"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
