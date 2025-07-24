import { useNavigate, useParams } from "react-router-dom";
import TeaCard from "./TeaCard";
import TeaModal from "./TeaModal";
import { useTeaContext } from "../context/TeaContext";
import "../styles/layout/tea-list.css";
import "../styles/components/tea-cards.css";

const TeaGrid = ({
  teas,
  disableTilt = false,
  size = "small",
  basePath = "/closet",
}) => {
  const navigate = useNavigate();
  const { teaId } = useParams();
  const { teas: allTeas } = useTeaContext();

  const openModal = (id) => {
    navigate(`${basePath}/tea/${id}`);
  };

  const closeModal = () => {
    navigate(basePath);
  };

  const selectedTea = teaId ? allTeas.find((t) => t.id === teaId) : null;

  return (
    <>
      {teas
        .slice()
        .reverse()
        .map((tea) => (
          <TeaCard key={tea.id} tea={tea} onClick={openModal} size={size} />
        ))}

      {selectedTea && <TeaModal tea={selectedTea} onClose={closeModal} />}
    </>
  );
};

export default TeaGrid;
