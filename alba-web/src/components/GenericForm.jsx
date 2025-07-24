import { useState } from "react";
import "../styles/components/generic-forms.css";

const GenericForm = ({ onSubmit, onClose, initialData, title, fields }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    } else if (type === "checkbox-group") {
      const currentValues = formData[name] || [];
      if (checked) {
        newValue = [...currentValues, value];
      } else {
        newValue = currentValues.filter((v) => v !== value);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    fields.forEach((field) => {
      if (
        field.required &&
        (!formData[field.name] || formData[field.name].trim() === "")
      ) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.validate) {
        const error = field.validate(formData[field.name]);
        if (error) {
          newErrors[field.name] = error;
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  const isEditing = !!initialData;

  return (
    <form className="generic-form" onSubmit={handleSubmit}>
      <div className="generic-form__heading">
        <h2 className="generic-form__title">
          {isEditing ? `Edit ${title}` : `Add New ${title}`}
        </h2>
      </div>

      {fields.map((field) => {
        if (field.conditional) {
          const conditionValue = formData[field.conditional.field];
          if (conditionValue !== field.conditional.value) {
            return null;
          }
        }

        return (
          <div key={field.name} className="generic-form__field">
            {field.type === "checkbox" ? (
              <label className="generic-form__checkbox-label">
                <input
                  className="generic-form__checkbox"
                  type="checkbox"
                  id={field.name}
                  name={field.name}
                  checked={formData[field.name] || false}
                  onChange={handleChange}
                />
                {field.label} {field.required && "*"}
              </label>
            ) : field.type === "checkbox-group" ? (
              <div>
                <span className="generic-form__label">
                  {field.label} {field.required && "*"}
                </span>
                <div className="generic-form__checkbox-group">
                  {field.options?.map((option) => (
                    <label
                      key={option.value}
                      className="generic-form__checkbox-label"
                    >
                      <input
                        className="generic-form__checkbox"
                        type="checkbox"
                        name={field.name}
                        value={option.value}
                        checked={(formData[field.name] || []).includes(
                          option.value
                        )}
                        onChange={handleChange}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <label className="generic-form__label" htmlFor={field.name}>
                  {field.label} {field.required && "*"}
                </label>

                {field.type === "select" ? (
                  <select
                    className="generic-form__select"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    className="generic-form__textarea"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <input
                    className="generic-form__input"
                    id={field.name}
                    name={field.name}
                    type={field.type || "text"}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    min={field.min}
                    max={field.max}
                  />
                )}
              </>
            )}

            {errors[field.name] && (
              <span className="generic-form__error">{errors[field.name]}</span>
            )}
          </div>
        );
      })}

      <div className="generic-form__actions">
        <button
          className="generic-form__cancel"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="generic-form__submit" type="submit">
          {isEditing ? "Save Changes" : `Add ${title}`}
        </button>
      </div>
    </form>
  );
};

export default GenericForm;
