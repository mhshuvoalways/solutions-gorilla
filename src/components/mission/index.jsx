import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import Title from "../common/title";

const Mission = () => {
  const { t } = useTranslation();
  const mission = t("mission", { returnObjects: true });

  return (
    <div className={`card relative overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-10"
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
      <div className="relative text-center">
        <Title title={mission.title} />
        <div className="flex items-center justify-center gap-10 flex-wrap md:flex-nowrap">
          <p className="w-full md:w-7/12 text-lg">{parse(mission.leftDes)}</p>
          <p className="h-60 border border-sheer-white hidden md:block"></p>
          <p className="w-full md:w-5/12 text-2xl text-white tracking-wide">
            {mission.rightDes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
