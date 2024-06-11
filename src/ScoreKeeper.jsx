import { useState } from "react";
export default function ScoreKeeper() {
  const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
  const playerOne = () => {
    setScore((oldScore) => {
      return { ...oldScore, p1Score: oldScore.p1Score + 1 };
    })
  }
  const playerTwo = () => {
    setScore((oldScore) => {
      return { ...oldScore, p2Score: oldScore.p2Score + 1 };
    })
  }

  return (
    <div>
      <p>Player 1 : {score.p1Score}</p>
      <p>Player 2 : {score.p2Score}</p>
      <button onClick={playerOne}>player 1</button>
      <button onClick={playerTwo}>player 2</button>
    </div>
  )

}