import React from "react";
import ReactDom from "react-dom";

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

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        style={MODAL_STYLES}
        className="tc gold bg-navy dib br3 pa0 ma3 bw2 shadow-5"
      >
        <button
          className="grow hover-light-red b f6 bn br3 pa2 dib bg-gold navy"
          onClick={onClose}
        >
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
