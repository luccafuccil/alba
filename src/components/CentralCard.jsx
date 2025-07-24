import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components/central-card.css";

const CentralCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;

  return (
    <div className="central-card">
      <img
        src="/front-page-flower.png"
        className="front-page-flower"
        alt="Flower"
      />
      <h2 className="central-card-title">
        {from ? (
          "Ready for more tea discoveries?"
        ) : (
          <>
            Take your time, breath,
            <br />
            catalogue your tea collection
            <br />
            and discover new sensations.
          </>
        )}
      </h2>
      <p className="central-card-description">
        You can add your own teas
        <br />
        or we can suggest one for you,
        <br />
        just as you like it.
      </p>
      <button className="start-button" onClick={() => navigate("/closet")}>
        Go to my closet
      </button>
    </div>
  );
};

export default CentralCard;
