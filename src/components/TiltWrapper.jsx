import Tilt from "react-parallax-tilt";


const TiltWrapper = ({ children, disabled = false }) => {
  if (disabled) return children;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      reset={true}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.6}
      glareColor="#ffffd"
      glarePosition="left"
      glareBorderRadius="24px"
      className="tilt-container"
    >
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
