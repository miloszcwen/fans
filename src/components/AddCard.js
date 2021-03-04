import React from "react";
import "./AddCard.css";

const AddCard = ({ onModalOpen }) => {
  return (
    <div className="tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red">
      <div className="grow">
        <div className="ma3 hai relative">
          <div className="circle bg-gold pa0 ma0" onClick={onModalOpen}>
            <div className="add navy pa0 ma0">✚</div>
          </div>
        </div>
        <div>
          <h2 className="pa0 ma0">Click to add</h2>
          <p className="pa0 mb4 mt0">a new fan card</p>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
