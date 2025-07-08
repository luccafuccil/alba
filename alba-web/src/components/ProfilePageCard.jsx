import "../styles/profile.css";
import useLocalTeas from "../utils/useLocalTeas";
import { useEffect, useState } from "react";
import IndividualTeaCard from "./IndividualTeaCard";
import MobileIndividualTeaCard from "./MobileIndividualTeaCard";
import { useNavigate } from "react-router-dom";
import useIsDesktop from "../utils/useIsDesktop";
import WeatherAPI from "./WeatherAPI";
import TeaCards from "./TeaCards";

const teaTypeImages = {
  black: "/black_tea.png",
  white: "/white_tea.png",
  green: "/green_tea.png",
};

const ProfileGreeting = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-greeting__container">
      <img
        src={profile.photo}
        className="profile-greeting__photo"
        alt="Profile"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/generic-profile.png";
        }}
      />
      <div className="profile-greeting__text">
        <h1 className="profile-greeting__title">
          This is your page,
          <br />
          {profile.name}
        </h1>
        <h2 className="profile-greeting__subtitle">
          We hope you're enjoying your time here!
        </h2>
      </div>
    </div>
  );
};

const ProfileTeaList = () => {
  const [teas, setTeas] = useLocalTeas([]);

  return (
    <>
      <div className="profile-teas__container">
        <WeatherAPI />
        <div className="profile-teas__list">
          {teas.length === 0 ? (
            <p className="profile-teas__empty">
              No teas yet! Add some to your closet to see them here!
            </p>
          ) : (
            <TeaCards
              teas={teas}
              setTeas={setTeas}
              showAddButton={false}
              limit={5}
              compact={true}
              disableTilt={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

const ProfilePageCard = ({ profileId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.id === profileId?.toLowerCase()) {
          setProfile(data);
        } else {
          setProfile(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setProfile(null);
        setLoading(false);
      });
  }, [profileId]);

  if (loading)
    return <div className="profile-loading">Carregando perfil...</div>;
  if (!profile)
    return <div className="profile-not-found">Perfil não encontrado.</div>;

  return (
    <>
      <div className="profile-header__card">
        <ProfileGreeting profile={profile} />
      </div>
      <div className="profile-teas__card">
        <ProfileTeaList />
      </div>
    </>
  );
};

export default ProfilePageCard;
