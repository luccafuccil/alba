import { useParams, useNavigate } from "react-router-dom";
import { useTeaContext } from "../context/TeaContext";

export const useTeaModal = () => {
  const { teaId } = useParams();
  const navigate = useNavigate();
  const { teas } = useTeaContext();

  const selectedTea = teaId ? teas.find((tea) => tea.id === teaId) : null;

  const openModal = (id) => navigate(`/closet/tea/${id}`);
  const closeModal = () => navigate("/closet");

  return { selectedTea, openModal, closeModal };
};
