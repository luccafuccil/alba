import { useState, useEffect } from "react";
import NewTeaForm from "./NewTeaForm";
import "../styles/closet.css";
import "../styles/profile.css";
import Tilt from "react-parallax-tilt";
import Modal from "./Modal";
import IndividualTeaCard from "./IndividualTeaCard";
import MobileIndividualTeaCard from "./MobileIndividualTeaCard";
import useIsDesktop from "../utils/useIsDesktop";

const teaTypeImages = {
  black: "/black_tea.png",
  white: "/white_tea.png",
  green: "/green_tea.png",
};

const NewCardLogic = ({ tea, onEdit, onDelete, compact, disableTilt }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const handleDelete = (tea) => {
    setModalOpen(false);
    onDelete(tea);
  };

  const CardContent = (
    <button
      className={`tea-card tea-card--small${
        compact ? " tea-card--compact" : ""
      }`}
      onClick={() => setModalOpen(true)}
    >
      <p className={`tea-card__type tea-card__type--${tea.type}`}>{tea.type}</p>
      <h3 className="tea-card__name">{tea.name}</h3>
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
    </button>
  );

  return (
    <>
      {disableTilt ? (
        CardContent
      ) : (
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          reset={true}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.6}
          glareColor="#ffffd"
          glarePosition="left"
          glareBorderRadius="24px"
          className="tilt-container"
        >
          {CardContent}
        </Tilt>
      )}
      {modalOpen &&
        (isDesktop ? (
          <IndividualTeaCard
            tea={tea}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ) : (
          <MobileIndividualTeaCard
            tea={tea}
            onEdit={onEdit}
            onDelete={handleDelete}
            onClose={() => setModalOpen(false)}
          />
        ))}
    </>
  );
};

const TeaCards = ({
  teas,
  setTeas,
  showAddButton = true,
  limit = null,
  compact = false,
  disableTilt = false,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editTea, setEditTea] = useState(null);
  const [teaToDelete, setTeaToDelete] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const handleAddOrEditTea = (tea) => {
    if (editTea) {
      setTeas((prev) => prev.map((t) => (t === editTea ? tea : t)));
      setEditTea(null);
    } else {
      setTeas((prev) => [...prev, tea]);
    }
    setModalOpen(false);
  };

  const handleEdit = (tea) => {
    setEditTea(tea);
    setModalOpen(true);
  };

  const handleDelete = (tea) => {
    setTeaToDelete(tea);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTeas((prev) => prev.filter((t) => t !== teaToDelete));
    setDeleteModalOpen(false);
    setTeaToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setTeaToDelete(null);
  };

  const handleAdd = () => {
    setEditTea(null);
    setModalOpen(true);
  };

  return (
    <>
      {isDesktop
        ? modalOpen && (
            <Modal
              openModal={modalOpen}
              closeModal={() => {
                setModalOpen(false);
                setEditTea(null);
              }}
              className="new-tea-modal--small"
            >
              <NewTeaForm
                onSubmit={handleAddOrEditTea}
                closeModal={() => {
                  setModalOpen(false);
                  setEditTea(null);
                }}
                initialData={editTea}
              />
            </Modal>
          )
        : modalOpen && (
            <div className="mobile-tea-form-overlay">
              <NewTeaForm
                onSubmit={handleAddOrEditTea}
                closeModal={() => {
                  setModalOpen(false);
                  setEditTea(null);
                }}
                initialData={editTea}
              />
            </div>
          )}

      <div className="tea-cards-container">
        {showAddButton &&
          (disableTilt ? (
            <button
              className="new-tea-card"
              onClick={() => {
                setEditTea(null);
                setModalOpen(true);
              }}
            >
              <div className="new-tea-div">
                <h2 className="new-tea-plus">+</h2>
                <h3 className="new-tea-label">Add new</h3>
              </div>
            </button>
          ) : (
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              reset={true}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.6}
              glareColor="#ffffd"
              glarePosition="left"
              glareBorderRadius="24px"
              className="tilt-container"
            >
              <button
                className="new-tea-card"
                onClick={() => {
                  setEditTea(null);
                  setModalOpen(true);
                }}
              >
                <div className="new-tea-div">
                  <h2 className="new-tea-plus">+</h2>
                  <h3 className="new-tea-label">Add new</h3>
                </div>
              </button>
            </Tilt>
          ))}
        {(limit ? [...teas].slice(-limit) : [...teas])
          .reverse()
          .map((tea, idx) => (
            <NewCardLogic
              key={idx}
              tea={tea}
              onEdit={handleEdit}
              onDelete={handleDelete}
              compact={compact}
              disableTilt={disableTilt}
            />
          ))}
      </div>
      {isDesktop
        ? deleteModalOpen && (
            <Modal
              openModal={deleteModalOpen}
              closeModal={cancelDelete}
              className="new-tea-modal--prompt"
            >
              <div className="delete-confirmation-card">
                <h3 className="delete-confirmation-title">
                  Are you sure you want to delete "{teaToDelete?.name}"?
                </h3>
                <div className="delete-confirmation-actions">
                  <button onClick={confirmDelete} className="confirm-delete">
                    Yes, Delete
                  </button>
                  <button onClick={cancelDelete} className="cancel-delete">
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          )
        : deleteModalOpen && (
            <div className="mobile-tea-form-overlay">
              <div className="delete-confirmation-card">
                <h3 className="delete-confirmation-title">
                  Are you sure you want to delete "{teaToDelete?.name}"?
                </h3>
                <div className="delete-confirmation-actions">
                  <button onClick={confirmDelete} className="confirm-delete">
                    Yes, Delete
                  </button>
                  <button onClick={cancelDelete} className="cancel-delete">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  );
};

export default TeaCards;
