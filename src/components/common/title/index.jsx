import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

const Title = ({ className, title }) => {
  return (
    <Fade
      direction="up"
      className={`text-white text-3xl sm:text-6xl mb-10 ${className}`}
    >
      {parse(title)}
    </Fade>
  );
};

export default Title;
