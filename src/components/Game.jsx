import React, { useState } from "react";

const Game = ({ question, options, onAnswer, setScore }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (correctanswers.includes(option)) {
      setScore((prevScore) => prevScore + 1);
    }

    onAnswer();
  };

  const correctanswers = [
    "Joe Biden",
    "Narendra Modi",
    "Xi Jinping",
    "Olaf Scholz",
    "Rishi Sunak",
  ];

  return (
    <div>
      <h3 className="text-2xl">Q. {question}</h3>
      <ul className="flex flex-col gap-2 m-8 overflow-hidden">
        {options.map((option, index) => (
          <li
            className="cursor-pointer text-lg hover:underline hover:scale-105"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      Previous Selection: {selectedOption}
    </div>
  );
};

export default Game;
