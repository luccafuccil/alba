import TeaCloset from "../components/TeaCloset";
import "../styles/pages/closet.css";
import "../styles/layout/tea-list.css";
import "../styles/components/tea-cards.css";
import "../styles/components/filters.css";
import "../styles/components/forms.css";
import "../styles/components/modals.css";
import "../styles/components/buttons.css";

const ClosetPage = () => {
  return (
    <div className="closet-page">
      <TeaCloset />
    </div>
  );
};

export default ClosetPage;
