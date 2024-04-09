import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Title from "../common/title";

const CompareGorilla = () => {
  const { t } = useTranslation();
  const comparegorilla = t("comparegorilla", { returnObjects: true });

  return (
    <div className={`card relative overflow-hidden mt-28`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-20 bg-cover"
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
        <Title title={comparegorilla.title}></Title>
        <Fade direction="up">
          <p className="text-2xl">{comparegorilla.subTitle}</p>
        </Fade>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 w-full lg:w-10/12 mx-auto mt-20">
          <img src="/images/logo.svg" className="w-10/12 lg:w-3/12 mx-auto" />
          <div className="border p-3 rounded w-full flex items-center gap-6">
            <div className="relative h-6 w-full lg:w-3/12">
              <p className="bg-sheer-white rounded absolute inset-0" />
              <p
                className="absolute inset-0 rounded"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0), #fff)`,
                }}
              />
            </div>
            <p className="font-semibold text-nowrap">
              {comparegorilla.additional[0]}
            </p>
          </div>
        </div>
        <div className="block lg:flex mt-7 justify-center items-center gap-2 lg:gap-6 text-lg font-semibold text-white text-nowrap">
          <p className="text-start lg:text-center">
            {comparegorilla.additional[1]}
          </p>
          <div className="flex lg:hidden items-center justify-center gap-2 w-full">
            <p className="bg-sheer-white rounded h-6 w-full mx-auto" />
            <p>{comparegorilla.additional[2]}</p>
          </div>
          <p className="bg-sheer-white rounded h-6 w-full lg:w-4/12 hidden lg:block" />
          <p className="hidden lg:block hover:">
            {comparegorilla.additional[2]}
          </p>
        </div>
        <p className="mt-20 text-lg italic">
          {parse(comparegorilla.description)}
        </p>
      </div>
    </div>
  );
};

export default CompareGorilla;
