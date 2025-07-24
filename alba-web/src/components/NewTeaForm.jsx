import { useState, useEffect } from "react";
import "../styles/components/forms.css";

import { limitWords } from "../utils/wordLimit";
import { TEA_TYPES } from "../constants/teaTypes";

const MAX_NAME_WORDS = 5;
const MAX_DESC_WORDS = 30;

const defaultForm = {
  name: "",
  description: "",
  tastingNotes: "",
  type: "black",
  brewingTime: "",
  infusionIngredients: "",
};

const NewTeaForm = ({ onSubmit, closeModal, initialData }) => {
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(defaultForm);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      const words = value.trim().split(/\s+/);
      if (words.length > MAX_NAME_WORDS) {
        return;
      }
      newValue = limitWords(value, MAX_NAME_WORDS);
    }
    if (name === "description") {
      const words = value.trim().split(/\s+/);
      if (words.length > MAX_DESC_WORDS) {
        return;
      }
      newValue = limitWords(value, MAX_DESC_WORDS);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.type.trim()) {
      setError("Name and Type are required.");
      return;
    }
    if (onSubmit) onSubmit(form);
    setForm(defaultForm);
  };

  const isEditing = !!initialData;
  const formTitle = isEditing ? "Edit Tea" : "Add New Tea";
  const submitText = isEditing ? "Save Changes" : "Add Tea";

  return (
    <form className="new-tea-form" onSubmit={handleSubmit}>
      <div className="new-tea-form__heading">
        <h2 className="new-tea-form__title">{formTitle}</h2>
      </div>
      <div className="new-tea-form__field">
        <label className="new-tea-form__label" htmlFor="name">
          Name *
        </label>
        <input
          className="new-tea-form__input"
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="new-tea-form-type__container">
        <div className="new-tea-form__field">
          <label className="new-tea-form__label" htmlFor="type">
            Type *
          </label>
          <select
            className="new-tea-form__select"
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            {TEA_TYPES.map((teaType) => (
              <option key={teaType.value} value={teaType.value}>
                {teaType.label}
              </option>
            ))}
          </select>
        </div>
        <div className="new-tea-form__field">
          <label className="new-tea-form__label" htmlFor="brewTime">
            Brewing Time (minutes)
          </label>
          <input
            className="new-tea-form__input"
            id="brewTime"
            name="brewTime"
            type="number"
            min="0"
            max="30"
            value={form.brewTime}
            onChange={handleChange}
          />
        </div>
        {form.type === "infusion" && (
          <div className="new-tea-form__field">
            <label
              className="new-tea-form__label"
              htmlFor="infusionIngredients"
            >
              Infusion Ingredients
            </label>
            <input
              className="new-tea-form__input"
              id="infusionIngredients"
              name="infusionIngredients"
              type="text"
              value={form.infusionIngredients}
              onChange={handleChange}
              placeholder="e.g. chamomile, mint, etc."
            />
          </div>
        )}
      </div>
      <div className="new-tea-form__field">
        <label className="new-tea-form__label" htmlFor="description">
          Description or Notes
        </label>
        <textarea
          className="new-tea-form__textarea"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="new-tea-form__field">
        <label className="new-tea-form__label" htmlFor="tastingNotes">
          Tasting Notes (separated by commas)
        </label>
        <input
          className="new-tea-form__input"
          id="tastingNotes"
          name="tastingNotes"
          type="text"
          value={form.tastingNotes}
          onChange={handleChange}
        />
      </div>
      <div className="new-tea-form__actions">
        <button
          className="new-tea-form__cancel"
          type="button"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button className="new-tea-form__submit" type="submit">
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default NewTeaForm;
