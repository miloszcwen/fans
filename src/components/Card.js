import React, { useState } from "react";

const Card = ({ id, name, email, onDelete }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red">
      <div className="grow">
        <div
          className="placeholder bg-navy flex items-center justify-center ma3"
          style={imageLoaded ? { display: "none" } : {}}
        >
          <p>Loading an avatar...</p>
        </div>
        <img
          src={`https://robohash.org/${name}abc?set=set5`}
          alt="avatar"
          className="ma3"
          loading="lazy"
          with={300}
          height={300}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: "none" }}
        />
        <div>
          <h2 className="pa0 ma0 ">{name}</h2>
          <p className="pa0 mb4 mt0 ">{email}</p>
        </div>
      </div>
      <button
        className="grow absolute top-1 right-1 hover-light-red b f6 bn br3 pa2 dib bg-gold navy"
        href="#0"
        onClick={() => onDelete(id)}
        style={{ cursor: "pointer" }}
      >
        delete
      </button>
    </div>
  );
};

export default Card;
