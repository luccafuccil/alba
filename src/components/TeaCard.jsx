import TiltWrapper from "./TiltWrapper";
import TeaCardContent from "./TeaCardContent";
import useIsDesktop from "../utils/useIsDesktop";
import "../styles/components/tea-cards.css";

const TeaCard = ({ tea, onClick, disableTilt = false, size }) => {
  const isDesktop = useIsDesktop();

  const cardContent = (
    <button
      className={`tea-card tea-card--${size}`}
      onClick={() => onClick(tea.id)}
    >
      <TeaCardContent tea={tea} size={size} />
    </button>
  );

  return isDesktop && !disableTilt ? (
    <TiltWrapper>{cardContent}</TiltWrapper>
  ) : (
    cardContent
  );
};

export default TeaCard;
