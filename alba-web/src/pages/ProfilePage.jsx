import Header from "../components/header";
import ProfilePageCard from "../components/ProfilePageCard";
import "../styles/profile.css";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="profile-page">
      <Header />
      <ProfilePageCard profileId={id} />
    </div>
  );
};

export default ProfilePage;
