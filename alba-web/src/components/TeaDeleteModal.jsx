import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTeaContext } from "../context/TeaContext";
import DeletePrompt from "./DeletePrompt";
import useIsDesktop from "../utils/useIsDesktop";

const TeaDeleteModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { teaId } = useParams();
  const { teas, setTeas } = useTeaContext();
  const isDesktop = useIsDesktop();

  const isDeleteModal = location.pathname.includes("/delete");
  const teaToDelete = isDeleteModal
    ? teas.find((tea) => tea.id === teaId)
    : null;

  const getBasePath = () => {
    const currentPath = location.pathname;
    return currentPath.replace(/\/tea\/[^\/]+\/delete$/, "");
  };

  const handleConfirmDelete = () => {
    setTeas((prev) => prev.filter((t) => t.id !== teaId));
    navigate(getBasePath());
  };

  const handleCancelDelete = () => {
    const teaModalPath = location.pathname.replace(/\/delete$/, "");
    navigate(teaModalPath);
  };

  if (!isDeleteModal || !teaToDelete) return null;

  return (
    <DeletePrompt
      open={true}
      tea={teaToDelete}
      onConfirm={handleConfirmDelete}
      onCancel={handleCancelDelete}
    />
  );
};

export default TeaDeleteModal;
