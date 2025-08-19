
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { quizData } from "../quizData";
import QuizQuestion from "../components/QuizQuestion";
import { useUser } from "../context/UserContext";

const QuizPage = () => {
  const { user, setScore } = useUser();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  if (!user) {
    navigate("/");
    return null;
  }

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    quizData.forEach((q, idx) => {
      if (answers[idx] === q.answer) score++;
    });
    setScore(score);
    toast.success("Quiz submitted ");
    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
           Quiz Time
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {quizData.map((q, i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <QuizQuestion
                index={i}
                question={q}
                selectedOption={answers[i]}
                handleOptionChange={handleOptionChange}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition"
          >
             Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPage;
