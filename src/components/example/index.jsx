import { useTranslation } from "react-i18next";
import Title from "../common/title";

const Example = () => {
  const { t } = useTranslation();
  const example = t("example", { returnObjects: true });

  return (
    <div
      className={`card relative flex items-center flex-wrap lg:flex-nowrap justify-evenly gap-20 mt-28 overflow-hidden`}
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
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute -bottom-[30vw] left-[20vw]"
      />
      <div className="w-full lg:w-5/12 z-10 relative">
        <img src="/images/dashboard.png" className="rounded-xl" />
        <img
          src="/images/gorilla.png"
          className="absolute w-4/12 -bottom-20 left-[33%]"
        />
      </div>
      <div className="w-full lg:w-5/12 z-10">
        <Title title={example.title} />
        <p className="text-xl">{example.des}</p>
        <div className="mt-5 flex items-center gap-2 text-white">
          <button className="underline hover:text-off-white">
            {example.btn}
          </button>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Example;
