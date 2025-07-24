import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "teas";

export default function useLocalTeas(initialValue = []) {
  const [teas, setTeas] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let loadedTeas = stored ? JSON.parse(stored) : initialValue;
    loadedTeas = loadedTeas.map((tea) =>
      tea.id ? tea : { ...tea, id: uuidv4() }
    );
    return loadedTeas;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(teas));
  }, [teas]);

  return [teas, setTeas];
}
