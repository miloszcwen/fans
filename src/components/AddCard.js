import React from "react";
import "./AddCard.css";

const AddCard = ({ onModalOpen }) => {
  return (
    <div className="relative tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5 hover-light-red">
      <div className="grow">
        <div className="ma3 placeholder relative">
          <button
            onClick={onModalOpen}
            display="none"
            style={{
              padding: 0,
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            <div className="circle bg-gold pa0 ma0">
              <div className="add navy pa0 ma0">✚</div>
            </div>
          </button>
        </div>
        <div>
          <h2 className="pa0 ma0">Click + to add</h2>
          <p className="pa0 mb4 mt0">a new fan card</p>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
