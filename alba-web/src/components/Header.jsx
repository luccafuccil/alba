import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout.css";
import "../styles/profile.css";
import {
  IconLabel,
  IconMug,
  IconSettings,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import useIsDesktop from "../utils/useIsDesktop";

const ProfileCard = ({ isMobile, closeFloat }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  const handleProfileClick = () => {
    if (isMobile) {
      closeFloat();
    } else {
      navigate(`/profile/${profile.id}`);
    }
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-card">
        <div className="profile-info">
          <h2 className="profile-name">
            Hello,
            <br />
            {profile.name}
          </h2>
          <span onClick={handleProfileClick}>
            <img
              src={profile.photo}
              className="header-profile-photo-card"
              alt="Profile"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/generic-profile.png";
              }}
            />
          </span>
        </div>
        <div className="profile-actions">
          <ul className="menu-list-items">
            {isMobile && (
              <MenuItem icon={IconUser} to={`/profile/${profile.id}`}>
                My Profile
              </MenuItem>
            )}
            <MenuItem icon={IconMug} to="/closet">
              My Tea Collection
            </MenuItem>
            <MenuItem icon={IconShoppingCart}>
              Shop for Teas {"("}soon{")"}
            </MenuItem>
            <MenuItem icon={IconLabel}>
              Saved Programs {"("}soon{")"}
            </MenuItem>
            <MenuItem icon={IconSettings}>
              Settings {"("}soon{")"}
            </MenuItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProfileHover = () => {
  const [hovered, setHovered] = useState(false);
  const [profile, setProfile] = useState(null);
  const isMobile = !useIsDesktop();

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  const handleClick = () => {
    if (isMobile) setHovered((h) => !h);
  };

  return (
    <div
      className="profile-dropdown"
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
      style={{ display: "block", position: "relative" }}
    >
      <img
        src={profile.photo}
        className="header-profile-photo"
        alt="Profile"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/generic-profile.png";
        }}
      />
      <div className={`profile-card-float${hovered ? " visible" : ""}`}>
        <ProfileCard isMobile={isMobile} closeFloat={() => setHovered(false)} />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Link to="/" state={{ from: "/closet" }} className="header-link">
        <h1 className="header-name">Alba</h1>
      </Link>
      <ProfileHover />
    </header>
  );
};

export default Header;
