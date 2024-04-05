import { Fade } from "react-awesome-reveal";

const Title = ({ className, title }) => {
  return (
    <Fade direction="up" className={`text-white text-6xl mb-10 ${className}`}>
      {title}
    </Fade>
  );
};

export default Title;
