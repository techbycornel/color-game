import React, { useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorOption from "./components/ColorOption";
import GameInstructions from "./components/GameInstructions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";
import "./App.css";
import MusicToggle from "./components/MusicToggle";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const App = () => {
  const [targetColor, setTargetColor] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<string>("");

  // 🔄 Generate new target color
  const generateNewColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("");
  };

  // 🎯 Handle guess
  const handleColorGuess = (color: string) => {
    if (color === targetColor) {
      const newScore = score + 1;
      setScore(newScore);
      setGameStatus("Correct! 🎉");

      // 🏆 Update high score
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem("highScore", newScore.toString());
      }

      // 🔄 Randomize after correct pick
      generateNewColor();
    } else {
      setGameStatus("Wrong! Try again.");
      setScore(0);
    }
  };

  const handleNewGame = () => {
    setScore(0);
    generateNewColor();
  };

  // 📦 Load high score on mount
  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(Number(storedHighScore));
    }
    generateNewColor();
  }, []);

  return (
    <div className="App">
      <GameInstructions />
      <ColorBox color={targetColor} />

      <main className="game">
        <div className="color-options">
          {colors.map((color) => (
            <ColorOption
              key={color}
              color={color}
              onClick={() => handleColorGuess(color)}
            />
          ))}
        </div>
      </main>

      <GameStatus status={gameStatus} />
      <Score score={score} highScore={highScore} />
      <NewGameButton onClick={handleNewGame} />
      <MusicToggle />
    </div>
  );
};

export default App;
