import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ScreenShots from "../common/screenshots";
import Title from "../common/title";

const About = () => {
  const { t } = useTranslation();
  const about = t("about.items", { returnObjects: true });

  return (
    <div>
      <div className="flex items-center justify-evenly mt-28 flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-3/12 relative">
          <ScreenShots image="/images/settings.jpeg" />
        </div>
        <div className="w-full lg:w-5/12">
          <Title title={about[0].title} />
          <p className="text-xl">{parse(about[0].description)}</p>
          <div className="mt-5 flex items-center gap-2 text-white underline hover:text-off-white cursor-pointer">
            <Link to={"/our-process"}>
              <button>{about[0].btn}</button>
            </Link>
            <img src="/icons/arrow-right.svg" className="w-5" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-28 flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-5/12">
          <Title title={about[1].title} />
          <p className="text-xl">{parse(about[1].description)}</p>
          <div className="mt-5 flex items-center gap-2 text-white underline hover:text-off-white cursor-pointer">
            <Link to={"/architecture"}>
              <button>{about[1].btn}</button>
            </Link>
            <img src="/icons/arrow-right.svg" className="w-5" />
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex justify-center items-center">
          <img
            src="/images/bg-lines.svg"
            className="absolute -z-10 opacity-40"
          />
          <div className="">
            <img src="/images/architecture.png" className="z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
