import React, { useState } from 'react';

function Flashcard({ rule }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <h2 className="rule-title">{rule.title}</h2>
        </div>
        <div className="flashcard-back">
          <p className="rule-detail">{rule.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
