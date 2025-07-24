import Modal from "./Modal";
import useIsDesktop from "../utils/useIsDesktop";
import "../styles/components/modals.css";

const DeletePrompt = ({ open, tea, onConfirm, onCancel }) => {
  const isDesktop = useIsDesktop();

  if (!open) return null;

  const content = (
    <div className="delete-confirmation-card">
      <h3 className="delete-confirmation-title">
        Are you sure you want to delete "{tea?.name}"?
      </h3>
      <div className="delete-confirmation-actions">
        <button onClick={onConfirm} className="confirm-delete">
          Yes, Delete
        </button>
        <button onClick={onCancel} className="cancel-delete">
          Cancel
        </button>
      </div>
    </div>
  );

  return isDesktop ? (
    <Modal
      openModal={open}
      closeModal={onCancel}
      className="new-tea-modal--prompt"
    >
      {content}
    </Modal>
  ) : (
    <div className="mobile-tea-form-overlay">{content}</div>
  );
};

export default DeletePrompt;
