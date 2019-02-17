import React from "react";
import PropTypes from "prop-types";

export const TriggerButton = ({ showModal, buttonRef, triggerText }) => {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef} // this is a reference to the button
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};

TriggerButton.propTypes = {
  showModal: PropTypes.func,
  buttonRef: PropTypes.func,
  triggerText: PropTypes.string
};

// export default TriggerButton;
