import Modal from "./Modal";
import useIsDesktop from "../utils/useIsDesktop";
import "../styles/components/modals.css";

const FormModal = ({
  isOpen,
  onClose,
  children,
  modalClassName = "",
  mobileClassName = "mobile-form-overlay",
}) => {
  const isDesktop = useIsDesktop();

  if (!isOpen) return null;

  return isDesktop ? (
    <Modal openModal={true} closeModal={onClose} className={modalClassName}>
      {children}
    </Modal>
  ) : (
    <div className={mobileClassName}>{children}</div>
  );
};

export default FormModal;
