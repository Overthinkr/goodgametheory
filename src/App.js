import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currques, setCurrques] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    "Who is the President of USA?",
    "Who is the Prime Minister of India?",
    "Who is the President of China?",
    "Who is the Chancellor of Germany?",
    "Who is the Prime Minister of UK?",
  ];

  const answerOptions = [
    ["Donald Trump", "Joe Biden", "Barack Obama", "Pete Davidson"],
    ["Narendra Modi", "Manmohan Singh", "Steve Jobs", "Rahul Gandhi"],
    ["Hu Jintao", "Deng Xiaoping", "Mao Zedong", "Xi Jinping"],
    ["Angela Merkel", "Olaf Scholz", "Gerhard Schröder"],
    ["Rishi Sunak", "Boris Johnson", "David Cameron"],
  ];

  const handleQuestionAnswered = (isCorrect) => {
    setCurrques((prevCurrques) => prevCurrques + 1);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const restartGame = () => {
    setGameStarted(false);
    setCurrques(0);
    setScore(0);
  };

  return (
    <div className="App text-center font-serif bg-gradient-to-r from-yellow-100 to-yellow-400 h-screen">
      <h1 className="text-5xl p-28"> The GoodGame Theory </h1>
      {gameStarted && currques < questions.length ? (
        <Game
          question={questions[currques]}
          options={answerOptions[currques]}
          onAnswer={handleQuestionAnswered}
          setScore={setScore}
        />
      ) : (
        <div className="flex items-center flex-col">
          <p
            className={`${score === 5 ? "text-green-700 text-2xl" : "text-xl"}`}
          >
            Your score: {score}/5
          </p>
          {score === 0 && (
            <button
              className="bg-yellow-500 p-4 m-8 rounded-full font-sans font-semibold flex flex-row justify-center items-center gap-1"
              onClick={() => setGameStarted(true)}
            >
              Start MCQ QUIZ
              <span className="material-symbols-outlined">navigate_next</span>
            </button>
          )}
          {score > 0 && (
            <button
              onClick={restartGame}
              className="bg-yellow-500 p-4 m-8 rounded-full font-sans font-semibold flex flex-row justify-center items-center gap-1"
            >
              Retry<span class="material-symbols-outlined">restart_alt</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
