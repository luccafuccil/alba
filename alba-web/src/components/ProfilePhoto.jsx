const ProfilePhoto = ({ src, alt = "Profile", className = "", ...props }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/generic-profile.png";
  };

  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};

export default ProfilePhoto;
