import { useProfile } from "../utils/useProfile";
import {
  ProfileLoading,
  ProfileNotFound,
  ProfileError,
} from "./ProfileLoading";
import ProfileGreeting from "./ProfileGreeting";
import ProfileTeaList from "./ProfileTeaList";
import "../styles/layout/profile.css";

const ProfilePageCard = ({ profileId }) => {
  const { profile, loading, error } = useProfile(profileId);

  if (loading) return <ProfileLoading />;
  if (error) return <ProfileError error={error} />;
  if (!profile) return <ProfileNotFound />;

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
