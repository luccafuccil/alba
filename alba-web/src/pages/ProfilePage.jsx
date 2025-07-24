import ProfilePageCard from "../components/ProfilePageCard";
import TeaFormModal from "../components/TeaFormModal";
import TeaDeleteModal from "../components/TeaDeleteModal";
import "../styles/pages/profile.css";
import "../styles/layout/profile.css";
import "../styles/components/profile-greeting.css";
import "../styles/components/profile-tea-list.css";
import "../styles/components/weather-widget.css";

import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="profile-page">
      <TeaFormModal />
      <TeaDeleteModal />
      <ProfilePageCard profileId={id} />
    </div>
  );
};

export default ProfilePage;
