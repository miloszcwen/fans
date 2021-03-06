import React, { useState } from "react";
import ReactDom from "react-dom";
import uuid from "uuid/dist/v4";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(181, 184, 214, .7)",
  zIndex: 1000,
};

export default function Modal({ open, setIsOpen, onClose, addFan }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    var re = /\S+@\S+/;
    return re.test(email);
  }

  function handleAddFan(e) {
    e.preventDefault();
    if (name && validateEmail(email)) {
      addFan({ id: uuid(), name: name, email: email });
      setName("");
      setEmail("");
      setIsOpen(false);
    } else {
      alert("You must fill name and valid email!");
    }
  }
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        style={MODAL_STYLES}
        className="tc gold bg-navy dib br3 pa2 ma2 bw2 shadow-5"
      >
        <h1 className="mt0">Add a new fan:</h1>
        <form className="ma2 pa2">
          <input
            className="ma1"
            type="text"
            value={name}
            placeholder="name"
            label="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="ma1"
            type="text"
            value={email}
            placeholder="email"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="submit"
            value="add new fan"
            onClick={handleAddFan}
            className="grow hover-light-red b f6 bn br3 pa2 ma1 dib bg-gold navy"
            style={{ cursor: "pointer" }}
          ></input>
        </form>
        <button
          className="grow hover-light-red b f6 bn br3 pa2 ma2 mt5 dib bg-gold navy"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        >
          Cancel
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
