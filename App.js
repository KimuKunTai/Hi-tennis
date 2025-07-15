import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const handleSaveImage = () => {
    html2canvas(document.querySelector("#scoreboard")).then(canvas => {
      const link = document.createElement("a");
      link.download = "scoreboard.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="App">
      <div id="scoreboard" className="scoreboard">
        <div className="team">
          <input type="text" defaultValue="선수1" />
          <input type="text" defaultValue="선수2" />
          <div className="score">
            {score1}
            <button onClick={() => setScore1(score1 + 1)}>+1 점</button>
          </div>
        </div>
        <div className="team">
          <input type="text" defaultValue="선수3" />
          <input type="text" defaultValue="선수4" />
          <div className="score">
            {score2}
            <button onClick={() => setScore2(score2 + 1)}>+1 점</button>
          </div>
        </div>
      </div>
      <button className="save-button" onClick={handleSaveImage}>📸 이미지로 저장</button>
    </div>
  );
}

export default App;
