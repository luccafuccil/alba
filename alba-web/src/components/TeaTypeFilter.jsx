import { forwardRef } from "react";
import { TEA_TYPES } from "../constants/teaTypes";
import "../styles/components/filters.css";

const TeaTypeFilter = ({ selectedType, onChange, scrollRef }) => (
  <div className="tea-type-filter" ref={scrollRef}>
    <button
      className={selectedType === "all" ? "active" : ""}
      onClick={() => onChange("all")}
    >
      All
    </button>
    <button
      type="button"
      className={selectedType === "favorite" ? "active" : ""}
      onClick={() => onChange("favorite")}
    >
      Favorites
    </button>
    {TEA_TYPES.map((teaType) => (
      <button
        key={teaType.value}
        className={selectedType === teaType.value ? "active" : ""}
        onClick={() => onChange(teaType.value)}
      >
        {teaType.label}
      </button>
    ))}
  </div>
);

export default TeaTypeFilter;
