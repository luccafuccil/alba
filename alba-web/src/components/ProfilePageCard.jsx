import "../styles/profile.css";
import useLocalTeas from "../utils/useLocalTeas";
import { useEffect, useState } from "react";
import IndividualTeaCard from "./IndividualTeaCard";
import { useNavigate } from "react-router-dom";
import WeatherAPI from "./WeatherAPI";

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

const ProfileTeaList = ({ onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [teas] = useLocalTeas([]);
  const [selectedTea, setSelectedTea] = useState(null);

  const handleDelete = (tea) => {
    setSelectedTea(null);
    onDelete(tea);
  };

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
            <>
              {teas
                .slice(-5)
                .reverse()
                .map((tea, idx) => (
                  <button
                    className="profile-tea-card"
                    key={idx}
                    onClick={() => setSelectedTea(tea)}
                  >
                    <div className="profile-tea-card__info">
                      <h3 className="profile-tea-card__name">{tea.name}</h3>
                      <span
                        className={`profile-tea-card__type profile-tea-card__type--${tea.type}`}
                      >
                        {tea.type}
                      </span>
                    </div>
                    <p className="profile-tea-card__tasting">
                      {tea.tastingNotes}
                    </p>
                    <img
                      className="profile-tea-card__image"
                      src={teaTypeImages[tea.type] || "/images/black_tea.png"}
                      alt={`${tea.type} Tea`}
                    />
                  </button>
                ))}
              <button
                className="profile-tea-card__more-button"
                onClick={() => navigate("/closet")}
              >
                View All Teas &gt;
              </button>
            </>
          )}
        </div>
      </div>
      {selectedTea && (
        <IndividualTeaCard
          tea={selectedTea}
          modalOpen={!!selectedTea}
          setModalOpen={(open) => !open && setSelectedTea(null)}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      )}
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
