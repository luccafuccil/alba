import { useState, useEffect } from "react";
import "../styles/components/filters.css";

import { IconArrowBarLeft, IconArrowBarRight } from "@tabler/icons-react";

const ScrollIndicator = ({ containerRef, className = "" }) => {
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkScrollPosition = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkMobile();
    checkScrollPosition();

    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", () => {
      checkMobile();
      checkScrollPosition();
    });

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [containerRef]);

  if (!isMobile) return null;

  return (
    <>
      {showLeftArrow && (
        <div className={`scroll-indicator scroll-indicator--left ${className}`}>
          <span>
            <IconArrowBarLeft className="scroll-indicator__arrow" />
          </span>
        </div>
      )}
      {showRightArrow && (
        <div
          className={`scroll-indicator scroll-indicator--right ${className}`}
        >
          <span>
            <IconArrowBarRight className="scroll-indicator__arrow" />
          </span>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
