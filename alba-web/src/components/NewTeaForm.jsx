import React, { useState, useEffect } from "react";
import "../styles/closet.css";
import { limitWords, limitCharacters } from "../utils/wordLimit";

const MAX_NAME_WORDS = 5;
const MAX_DESC_WORDS = 30;

const defaultForm = {
  name: "",
  description: "",
  tastingNotes: "",
  type: "black",
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
        setError(`Name cannot exceed ${MAX_NAME_WORDS} words.`);
        return;
      }
      setError("");
    }
    if (name === "description") {
      const words = value.trim().split(/\s+/);
      if (words.length > MAX_DESC_WORDS) {
        setError(`Description cannot exceed ${MAX_DESC_WORDS} words.`);
        return;
      }
      setError("");
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
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

  return (
    <form className="new-tea-form" onSubmit={handleSubmit}>
      <div className="new-tea-form__heading">
        <h2 className="new-tea-form__title">Add New Tea</h2>
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
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="white">White</option>
        </select>
      </div>
      <div className="new-tea-form__field">
        <label className="new-tea-form__label" htmlFor="description">
          Description
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
          Add Tea
        </button>
      </div>
    </form>
  );
};

export default NewTeaForm;
