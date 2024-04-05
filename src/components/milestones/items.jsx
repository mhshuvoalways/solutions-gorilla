import { Fade } from "react-awesome-reveal";
import ScreenShots from "../common/screenshots";
import Title from "../common/title";

const items = ({ reverse, image, title, subTitle, description }) => {
  return (
    <div
      className={`flex items-center justify-evenly flex-wrap sm:flex-nowrap gap-10 ${
        reverse && "flex-col sm:flex-row-reverse"
      }`}
    >
      <div className="w-full sm:w-2/12 relative">
        <Fade>
          <ScreenShots image={image} />
        </Fade>
      </div>
      <div className="w-full sm:w-5/12">
        <Title className={"mb-2"} title={title} />
        <Fade direction="up">
          <p className="text-2xl text-white">{subTitle}</p>
        </Fade>
        <p className="mt-5 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default items;
