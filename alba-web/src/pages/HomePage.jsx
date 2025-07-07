import CentralCard from "../components/CentralCard";
import Header from "../components/header";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <CentralCard />
    </div>
  );
};

export default HomePage;
