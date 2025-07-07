import { useState, useEffect } from "react";

const STORAGE_KEY = "teas";

export default function useLocalTeas(initialValue = []) {
  const [teas, setTeas] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(teas));
  }, [teas]);

  return [teas, setTeas];
}
