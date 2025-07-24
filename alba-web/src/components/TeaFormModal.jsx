import { useLocation, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FormModal from "./FormModal";
import NewTeaForm from "./NewTeaForm";
import { useTeaContext } from "../context/TeaContext";
import "../styles/components/forms.css";

const TeaFormModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { teaId } = useParams();
  const { teas, setTeas } = useTeaContext();

  const isNewForm = location.pathname.includes("/tea/new");
  const isEditForm = location.pathname.includes("/edit");
  const editTea = isEditForm ? teas.find((tea) => tea.id === teaId) : null;

  const lastPath = location.pathname.replace(/\/edit$/, "");

  const getBasePath = () => {
    return lastPath.replace(/\/tea\/(?:new|[^\/]+(?:\/edit)?)$/, "");
  };

  const closeForm = () => navigate(getBasePath());
  const closeEditForm = () => navigate(lastPath);

  const handleSubmit = (tea) => {
    if (isEditForm && editTea) {
      setTeas((prev) =>
        prev.map((t) => (t.id === editTea.id ? { ...tea, id: editTea.id } : t))
      );
      closeEditForm();
    } else {
      setTeas((prev) => [...prev, { ...tea, id: uuidv4() }]);
      closeForm();
    }
  };

  if (!isNewForm && !isEditForm) return null;

  return (
    <FormModal
      isOpen={true}
      onClose={isEditForm ? closeEditForm : closeForm}
      modalClassName="new-tea-modal--small"
      mobileClassName="mobile-tea-form-overlay"
    >
      <NewTeaForm
        onSubmit={handleSubmit}
        closeModal={isEditForm ? closeEditForm : closeForm}
        initialData={editTea}
      />
    </FormModal>
  );
};

export default TeaFormModal;
