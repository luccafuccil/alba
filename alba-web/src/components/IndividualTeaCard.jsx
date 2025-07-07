import { useState } from "react";
import Modal from "./Modal";
import "../styles/closet.css";

const teaTypeImages = {
  black: "/black_tea.png",
  white: "/white_tea.png",
  green: "/green_tea.png",
};

const IndividualTeaCard = ({
  tea,
  modalOpen,
  setModalOpen,
  onEdit,
  onDelete,
}) => {
  if (!modalOpen) return null;
  return (
    <Modal
      openModal={modalOpen}
      closeModal={() => setModalOpen(false)}
      className="new-tea-modal--big"
    >
      <div className="tea-card tea-card--big">
        <h2 className="tea-card__name">{tea.name}</h2>
        <p className={`tea-card__type tea-card__type--${tea.type}`}>
          {tea.type}
        </p>
        <div className="tea-card__left">
          <p className="tea-card__description">{tea.description}</p>
        </div>
        <p className="tea-card__tasting">{tea.tastingNotes}</p>
        <div className="tea-card__right">
          <img
            className="tea-card__image"
            src={teaTypeImages[tea.type] || "/images/black_tea.png"}
            alt={`${tea.type} Tea Illustration`}
          />
        </div>
        <div className="tea-card__actions">
          <button
            type="button"
            className="tea-card__delete"
            onClick={() => onDelete(tea)}
          >
            Delete
          </button>
          <button
            type="button"
            className="tea-card__edit"
            onClick={() => onEdit(tea)}
          >
            Edit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default IndividualTeaCard;
