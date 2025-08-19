
import { useUser } from "../context/UserContext";
import { quizData } from "../quizData";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const { user, score } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  const percentage = Math.round((score / quizData.length) * 100);
  const passed = percentage >= 50;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Your Quiz Result
        </h1>

        <div className="space-y-3 text-left">
          <p className="text-lg">
            <b className="text-gray-700">Name:</b> {user.name}
          </p>
          <p className="text-lg">
            <b className="text-gray-700">Email:</b> {user.email}
          </p>
          <p className="text-lg">
            <b className="text-gray-700">Admission No:</b> {user.admission}
          </p>
        </div>

        <div className="mt-6 p-4 rounded-xl shadow-md bg-gray-50">
          <p className="text-xl font-bold">
            Score:{" "}
            <span className={passed ? "text-green-600" : "text-red-600"}>
              {score}/{quizData.length} ({percentage}%)
            </span>
          </p>
          <p
            className={`mt-2 font-semibold ${
              passed ? "text-green-500" : "text-red-500"
            }`}
          >
            {passed ? " Congratulations! You Passed" : " Better Luck Next Time"}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;

