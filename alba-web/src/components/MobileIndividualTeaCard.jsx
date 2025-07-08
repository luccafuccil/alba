import "../styles/closet.css";

const teaTypeImages = {
  black: "/black_tea.png",
  white: "/white_tea.png",
  green: "/green_tea.png",
};

const MobileIndividualTeaCard = ({ tea, onEdit, onDelete, onClose }) => {
  if (!tea) return null;
  return (
    <div className="tea-card tea-card--big mobile-individual-tea-card">
      <button
        className="tea-card__close"
        onClick={onClose}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "#533c3c",
          fontFamily: "Montserrat",
          fontWeight: 600,
          padding: "1rem 1.5rem",
        }}
        aria-label="Close"
      >
        X
      </button>
      <h2 className="tea-card__name">{tea.name}</h2>

      <p className={`tea-card__type tea-card__type--${tea.type}`}>{tea.type}</p>
      <div className="tea-card__right">
        <img
          className="mobile-tea-card__image"
          src={teaTypeImages[tea.type] || "/images/black_tea.png"}
          alt={`${tea.type} Tea Illustration`}
        />
      </div>
      <div className="tea-card__left">
        <p className="tea-card__description">{tea.description}</p>
      </div>
      <p className="tea-card__tasting">{tea.tastingNotes}</p>
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
  );
};

export default MobileIndividualTeaCard;
