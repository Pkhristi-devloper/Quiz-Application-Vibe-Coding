import { useEffect, useState } from "react";
import  questions  from "../utils/Questions";

const Home = () => {
  const [selectedCount, setSelectedCount] = useState(10);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [timer, setTimer] = useState(45);
  const [started, setStarted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    if (started && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleNext();
    }
  }, [timer, started]);

  const handleStart = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, selectedCount);
    setShuffledQuestions(shuffled);
    setStarted(true);
    setCurrentQIndex(0);
    setScore(0);
    setWrong(0);
    setTimer(45);
  };

  const handleOptionClick = (option) => {
    const currentQ = shuffledQuestions[currentQIndex];
    if (option === currentQ.answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentQIndex + 1 < selectedCount) {
      setCurrentQIndex((prev) => prev + 1);
      setTimer(45);
    } else {
      setShowResult(true);
      setStarted(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">🔥 WebDev Quiz App 🔥</h1>

      {!started && !showResult && (
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
          <label className="block text-lg font-semibold text-orange-700 mb-2">Select number of questions:</label>
          <select
            value={selectedCount}
            onChange={(e) => setSelectedCount(parseInt(e.target.value))}
            className="w-full p-2 rounded border border-orange-300 focus:outline-orange-500"
          >
            {[10, 20, 25, 30, 40, 50].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button
            onClick={handleStart}
            className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-xl hover:bg-orange-600 cursor-pointer"
          >
            Start Quiz
          </button>
        </div>
      )}

      {started && (
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl mt-4">
          <div className="flex justify-between mb-2 items-center">
            <h2 className="text-xl font-bold">Question {currentQIndex + 1} of {selectedCount}</h2>
            <span className="text-sm text-red-600 font-semibold">⏳ {timer}s left</span>
          </div>
          <p className="text-lg font-medium mb-4">{shuffledQuestions[currentQIndex].question}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shuffledQuestions[currentQIndex].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(opt)}
                className="bg-orange-100 hover:bg-orange-200 p-3 rounded-xl text-left border border-orange-300"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">🎉 Quiz Completed!</h2>
            <p className="text-lg">✅ Correct Answers: {score}</p>
            <p className="text-lg">❌ Wrong Answers: {wrong}</p>
            <p className="text-lg font-semibold mt-2">🏆 Your Score: {score * 2} points</p>
            <button
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
              onClick={() => setShowResult(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button className="fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-orange-700">
        💬 AI Chatbot
      </button>
    </div>
  );
};

export default Home;