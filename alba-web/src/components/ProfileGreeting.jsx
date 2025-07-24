import ProfilePhoto from "./ProfilePhoto";
import "../styles/components/profile-greeting.css";
import {
  getProfileLevelClass,
  getProfileLevelLabel,
} from "../utils/getProfileLevel";

const ProfileGreeting = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-greeting__container">
      <ProfilePhoto
        src={profile.photo}
        className="profile-greeting__photo"
        alt="Profile"
      />
      <div className="profile-greeting__text">
        <h1 className="profile-greeting__title">
          This is your page,
          <br />
          {profile.name}
        </h1>
        <span
          className={`profile-greeting__level ${getProfileLevelClass(
            profile.level
          )}`}
        >
          {getProfileLevelLabel(profile.level)}
        </span>
      </div>
    </div>
  );
};

export default ProfileGreeting;
