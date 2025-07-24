import { useNavigate, useLocation } from "react-router-dom";
import { useTeaContext } from "../context/TeaContext";


const TeaCardActions = ({ tea }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTeas } = useTeaContext();

  const getBasePath = () => {
    const currentPath = location.pathname;
    return currentPath.replace(/\/tea\/[^\/]+(?:\/edit)?$/, "");
  };

  const basePath = getBasePath();

  return (
    <div className="tea-card__actions">
      <button
        className="tea-card__delete"
        onClick={() => navigate(`${basePath}/tea/${tea.id}/delete`)}
      >
        Delete
      </button>
      <button
        className="tea-card__edit"
        onClick={() => navigate(`${basePath}/tea/${tea.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default TeaCardActions;
