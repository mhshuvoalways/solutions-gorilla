import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Hero = () => {
  const { t } = useTranslation();
  const hero = t("hero", { returnObjects: true });

  return (
    <div
      className={`card lg:py-0 flex items-center flex-wrap lg:flex-nowrap gap-5`}
    >
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-10 bg-cover"
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(341deg, rgba(0, 0, 0, 0), #000)`,
        }}
      ></div>
      <img
        src="/images/blurred-circle-tiny.png"
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute"
      />
      <div className="relative w-full lg:w-8/12">
        <Fade direction="up">
          <p className="text-3xl sm:text-5xl text-white font-semibold">
            {parse(hero.title)}
          </p>
        </Fade>
        <p className="text-2xl mt-6">{hero.subTitle}</p>
        <div className="text-2xl mt-6">
          <p>{hero.including}:</p>
          <ul>
            {hero.items.map((el, index) => (
              <li key={index}>- {parse(el)}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3 flex-wrap mt-20">
          <Link to={"/our-process"}>
            <button className="btn">{hero.btn.first}</button>
          </Link>
          <Link to={"/architecture"}>
            <button className="btn">{hero.btn.second}</button>
          </Link>
        </div>
      </div>
      <div className="w-10/12 mx-auto lg:w-4/12 h-full">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
