import useIsDesktop from "../utils/useIsDesktop";
import TiltWrapper from "./TiltWrapper";
import "../styles/components/buttons.css";

const AddTeaButton = ({ onClick, disableTilt = false }) => {
  const isDesktop = useIsDesktop();

  if (!isDesktop) return null;

  const button = (
    <button className="new-tea-card" onClick={onClick}>
      <div className="new-tea-div">
        <h2 className="new-tea-plus">+</h2>
        <h3 className="new-tea-label">Add new</h3>
      </div>
    </button>
  );

  return <TiltWrapper disabled={disableTilt}>{button}</TiltWrapper>;
};

export default AddTeaButton;
