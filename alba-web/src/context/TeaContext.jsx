import { createContext, useContext } from "react";
import useLocalTeas from "../utils/useLocalTeas";

const TeaContext = createContext();

export function TeaData({ children }) {
  const [teas, setTeas] = useLocalTeas([]);
  const handleToggleFavorite = (teaId) => {
    setTeas((prevTeas) =>
      prevTeas.map((tea) =>
        tea.id === teaId ? { ...tea, favorite: !tea.favorite } : tea
      )
    );
  };

  return (
    <TeaContext.Provider value={{ teas, setTeas, handleToggleFavorite }}>
      {children}
    </TeaContext.Provider>
  );
}

export function useTeaContext() {
  return useContext(TeaContext);
}
