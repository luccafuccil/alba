import "../styles/components/profile-loading.css";

export const ProfileLoading = () => (
  <div className="profile-loading">Loading profile...</div>
);

export const ProfileNotFound = () => (
  <div className="profile-not-found">Profile not found.</div>
);

export const ProfileError = ({ error }) => (
  <div className="profile-error">Error loading profile: {error}</div>
);
