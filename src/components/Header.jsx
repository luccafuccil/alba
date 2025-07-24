import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/layout/header.css";
import "../styles/components/menu-items.css";
import "../styles/components/profile-dropdown.css";

import {
  IconLabel,
  IconMug,
  IconSettings,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import ProfilePhoto from "./ProfilePhoto";
import useIsDesktop from "../utils/useIsDesktop";

const useHeaderProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error loading profile:", err));
  }, []);

  return profile;
};

const ProfileCard = ({ isMobile, closeFloat, profile }) => {
  const navigate = useNavigate();

  if (!profile) return null;

  const handleProfileClick = () => {
    if (isMobile) {
      closeFloat();
    } else {
      navigate(`/profile/${profile.id}`);
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2 className="profile-name">
          Hello,
          <br />
          {profile.name}
        </h2>
        <span onClick={handleProfileClick}>
          <ProfilePhoto
            src={profile.photo}
            className="header-profile-photo-card"
            alt="Profile"
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
  );
};

const ProfileHover = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const isMobile = !useIsDesktop();
  const profile = useHeaderProfile();

  useEffect(() => {
    if (isMobile && hovered) {
      const handleClickOutside = (event) => {
        const profileDropdown = document.querySelector(".profile-dropdown");
        if (profileDropdown && !profileDropdown.contains(event.target)) {
          setHovered(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobile, hovered]);

  if (!profile) return null;

  const handleClick = () => {
    if (isMobile) {
      setHovered((h) => !h);
    } else {
      navigate(`/profile/${profile.id}`);
    }
  };

  return (
    <div
      className="profile-dropdown"
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
      style={{ display: "block", position: "relative" }}
    >
      <ProfilePhoto
        src={profile.photo}
        className="header-profile-photo"
        alt="Profile"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      />
      <div className={`profile-card-float${hovered ? " visible" : ""}`}>
        <ProfileCard
          isMobile={isMobile}
          closeFloat={() => setHovered(false)}
          profile={profile}
        />
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
