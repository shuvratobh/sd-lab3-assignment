import React, { useState } from 'react';

const reactions = ["Like", "Love", "Angry", "Sad"];

function ReactionBar() {
  const [activeReaction, setActiveReaction] = useState('Like');

  return (
    <div className="reaction-bar">
      {reactions.map(reaction => (
        <button
          key={reaction}
          className={`reaction-button ${activeReaction === reaction ? 'active' : ''}`}
          onClick={() => setActiveReaction(reaction)}
        >
          {reaction}
        </button>
      ))}
    </div>
  );
}

export default ReactionBar;