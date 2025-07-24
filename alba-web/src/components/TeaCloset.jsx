import { useMemo, useRef } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useTeaContext } from "../context/TeaContext";
import TeaFormModal from "./TeaFormModal";
import TeaDeleteModal from "./TeaDeleteModal";
import TeaTypeFilter from "./TeaTypeFilter";
import ScrollIndicator from "./ScrollIndicator";
import TeaGrid from "./TeaGrid";
import AddTeaButton from "./AddTeaButton";
import useIsDesktop from "../utils/useIsDesktop";
import "../styles/layout/tea-list.css";
import "../styles/components/tea-cards.css";
import "../styles/components/filters.css";

const TeaCloset = () => {
  const { teas } = useTeaContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const filterScrollRef = useRef(null);
  const isDesktop = useIsDesktop();

  const selectedType = searchParams.get("type") || "all";

  const basePath = location.pathname.replace(/\/tea\/.*$/, "") || "/closet";

  const handleTypeChange = (newType) => {
    if (newType === "all") {
      searchParams.delete("type");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ type: newType });
    }
  };

  const filteredTeas = useMemo(() => {
    if (selectedType === "all") return teas;
    if (selectedType === "favorite") return teas.filter((tea) => tea.favorite);
    return teas.filter((tea) => tea.type === selectedType);
  }, [teas, selectedType]);

  const title =
    selectedType === "all"
      ? `Your Tea Collection (${filteredTeas.length})`
      : `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} (${
          filteredTeas.length
        })`;

  return (
    <>
      <TeaFormModal />
      <TeaDeleteModal />

      <div className="tea-list-card">
        <div className="tea-list-header">
          <h2 className="tea-list-title">
            {filteredTeas.length === 0
              ? "Seems like your tea closet's empty."
              : title}
          </h2>

          <div className="tea-type-filter-container">
            <TeaTypeFilter
              selectedType={selectedType}
              onChange={handleTypeChange}
              scrollRef={filterScrollRef}
            />
            <ScrollIndicator containerRef={filterScrollRef} />
          </div>
        </div>
        <div className="tea-cards-container">
          <AddTeaButton onClick={() => navigate(`${basePath}/tea/new`)} />
          <TeaGrid teas={filteredTeas} size="small" basePath={basePath} />

          {!isDesktop && (
            <button
              className="floating-action-button"
              onClick={() => navigate(`${basePath}/tea/new`)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TeaCloset;
