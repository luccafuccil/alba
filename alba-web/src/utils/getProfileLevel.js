import { PROFILE_LEVELS } from "../constants/profileLevels";

export const getProfileLevel = (level) => {
  return PROFILE_LEVELS.find((l) => l.value === level) || null;
};

export const getProfileLevelClass = (level) => {
  const profileLevel = getProfileLevel(level);
  if (!profileLevel) return "";

  return `${profileLevel.value}`;
};

export const getProfileLevelLabel = (level) => {
  const profileLevel = getProfileLevel(level);
  return profileLevel ? profileLevel.label : "";
};
