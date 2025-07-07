import Header from "../components/header";
import TeaListCard from "../components/ClosetTeaList";
import "../styles/closet.css";

const ClosetPage = () => {
  return (
    <div className="closet-page">
      <Header />
      <TeaListCard />
    </div>
  );
};

export default ClosetPage;
