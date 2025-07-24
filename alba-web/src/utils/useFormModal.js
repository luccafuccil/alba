import { useState } from "react";

const useFormModal = (onSubmit, onClose) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (data = null) => {
    setInitialData(data);
    setIsEditing(!!data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setInitialData(null);
    setIsEditing(false);
    if (onClose) onClose();
  };

  const handleSubmit = (formData) => {
    if (onSubmit) onSubmit(formData, isEditing, initialData);
    closeModal();
  };

  return {
    isOpen,
    isEditing,
    initialData,
    openModal,
    closeModal,
    handleSubmit,
  };
};

export default useFormModal;
