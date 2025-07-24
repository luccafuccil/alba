import { useTeaContext } from "../context/TeaContext";
import { useParams } from "react-router-dom";
import WeatherAPI from "./WeatherAPI";
import TeaGrid from "./TeaGrid";
import "../styles/components/profile-tea-list.css";

const ProfileTeaList = () => {
  const { teas } = useTeaContext();
  const { id } = useParams();
  const isEmpty = teas.length === 0;

  if (isEmpty) {
    return (
      <div className="profile-teas__container">
        <WeatherAPI />
        <div className="profile-teas__list">
          <p className="profile-teas__empty">
            No teas yet! Add some to your closet to see them here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-teas__container">
      <WeatherAPI />
      <div className="profile-teas__list">
        <TeaGrid
          teas={teas.slice(0, 5)}
          disableTilt={true}
          size="compact"
          basePath={`/profile/${id}`}
        />
      </div>
    </div>
  );
};

export default ProfileTeaList;
