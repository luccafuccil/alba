import { useState, useEffect } from "react";

export const useProfile = (profileId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!profileId) {
        setProfile(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/profile.json");
        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();

        if (data.id === profileId.toLowerCase()) {
          setProfile(data);
        } else {
          setProfile(null);
        }
      } catch (err) {
        setError(err.message);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  return { profile, loading, error };
};
