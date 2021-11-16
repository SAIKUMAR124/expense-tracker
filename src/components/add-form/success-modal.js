import React from "react";
import Modal from "react-modal";
import './success-modal.css'

const SuccessModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return <Modal isOpen={true} style={customStyles}>
      <div className="modal-inner">
          <label>Expense Added Successfully</label>
          <div>
              Home
        </div>
      </div>
  </Modal>;
};

export default SuccessModal;
