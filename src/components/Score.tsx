import React from 'react';

interface ScoreProps {
  score: number;
  highScore: number;
}

const Score: React.FC<ScoreProps> = ({ score, highScore }) => {
  return (
    <div data-testid="score">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default Score;
