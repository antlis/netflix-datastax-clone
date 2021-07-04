import { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  const { title, thumbnail } = movie;

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <video className="video">
          <source src={thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <>
          <video className="video" autoPlay={true} loop>
            <source src={thumbnail} type="video/mp4" />
          </video>
          <div className="info-box">
            <p>{title}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
