import { getTeaImage } from "../utils/getTeaImage";
import TeaCardActions from "./TeaCardActions";
import { useTeaContext } from "../context/TeaContext";
import { IconHeart } from "@tabler/icons-react";
import "../styles/components/tea-cards.css";

const TeaCardContent = ({ tea, size, showActions = false }) => {
  const { handleToggleFavorite } = useTeaContext();

  return (
    <div className={`tea-card tea-card--${size}`}>
      <IconHeart
        onClick={(e) => {
          e?.stopPropagation();
          handleToggleFavorite(tea.id);
        }}
        className={`tea-card__heart${
          tea.favorite ? " tea-card__heart--active" : ""
        }`}
      />

      <p className={`tea-card__type tea-card__type--${tea.type}`}>{tea.type}</p>
      <h3 className="tea-card__name">{tea.name}</h3>

      <div className="tea-card__left">
        <p className="tea-card__description">{tea.description}</p>
        {tea.brewTime && (
          <h4 className="tea-card__brewing-time">{`${tea.brewTime} min`}</h4>
        )}
      </div>

      <p className="tea-card__tasting">{tea.tastingNotes}</p>

      <div className="tea-card__right">
        <img
          className="tea-card__image"
          src={getTeaImage(tea)}
          alt={`${tea.type} Tea Illustration`}
        />
      </div>

      {showActions && <TeaCardActions tea={tea} />}
    </div>
  );
};

export default TeaCardContent;
