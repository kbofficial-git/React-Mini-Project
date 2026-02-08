import { useState } from 'react';
import './Card.css';

function Card({ title }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-status">
        {isLiked ? 'Liked' : 'Not Liked'}
      </p>
      <button className="like-button" onClick={handleLike}>
        {isLiked ? '❤️ Unlike' : '🤍 Like'}
      </button>
    </div>
  );
}

export default Card;
