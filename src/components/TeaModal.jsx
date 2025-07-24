import useIsDesktop from "../utils/useIsDesktop";
import Modal from "./Modal";
import TeaCardContent from "./TeaCardContent";
import "../styles/components/modals.css";
import "../styles/components/tea-cards.css";

const TeaModal = ({ tea, onClose }) => {
  const isDesktop = useIsDesktop();

  if (!tea) return null;

  const content = <TeaCardContent tea={tea} size="big" showActions />;

  return isDesktop ? (
    <Modal openModal={true} closeModal={onClose} className="new-tea-modal--big">
      {content}
    </Modal>
  ) : (
    <div className="mobile-tea-form-overlay">
      <div className="mobile-tea-card--big">
        <button className="tea-card__close" onClick={onClose}>
          ×
        </button>
        {content}
      </div>
    </div>
  );
};

export default TeaModal;
