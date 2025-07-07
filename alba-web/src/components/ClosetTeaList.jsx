import "../styles/closet.css";
import TeaCards from "./TeaCards";
import useLocalTeas from "../utils/useLocalTeas";

const TeaListCard = () => {
  const [teas, setTeas] = useLocalTeas([]);

  return (
    <div className="tea-list-card">
      {teas.length === 0 ? (
        <h2 className="tea-list-title">Seems like your tea closet’s empty.</h2>
      ) : (
        <h2 className="tea-list-title">Your Tea Collection ({teas.length})</h2>
      )}
      <TeaCards teas={teas} setTeas={setTeas} />
    </div>
  );
};

export default TeaListCard;
