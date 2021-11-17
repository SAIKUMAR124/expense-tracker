import React from "react";
import Modal from "react-modal";
import { AiOutlineHome } from "react-icons/ai";
import "./success-modal.css";
import { Link } from "react-router-dom";

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          className="added-image"
          src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
          alt="success"
        />

        <Link to="/">
          <div className="take-home-button">
            <i>
              <AiOutlineHome />
            </i>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
