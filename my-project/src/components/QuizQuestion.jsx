
const QuizQuestion = ({ question, index, selectedOption, handleOptionChange }) => {
  return (
    <div>
      <h2 className="font-bold text-lg text-gray-800 mb-3">
        {index + 1}. {question.question}
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
              selectedOption === opt
                ? "bg-green-100 border-green-500"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name={`q${index}`}
              value={opt}
              checked={selectedOption === opt}
              onChange={() => handleOptionChange(index, opt)}
              className="text-green-600 focus:ring-green-500"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
