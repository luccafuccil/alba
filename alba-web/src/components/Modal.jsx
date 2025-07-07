import { useEffect, useRef } from "react";
import "../styles/closet.css";

function Modal({ openModal, closeModal, children, className = "" }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      className={`new-tea-modal ${className}`}
      ref={ref}
      onCancel={closeModal}
    >
      {children}
      <button className="close-modal-button" type="button" onClick={closeModal}>
        X
      </button>
    </dialog>
  );
}

export default Modal;
