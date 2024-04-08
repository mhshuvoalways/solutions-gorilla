import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Title from "../common/title";
import Items from "./items";

const MileStones = () => {
  const { t } = useTranslation();
  const milestones = t("milestones", { returnObjects: true });

  return (
    <div className={`card relative overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-30 bg-cover"
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
      <div className="relative space-y-16">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <Title title={milestones.title} className={"text-7cl"} />
          <Fade direction="up">
            <p className="text-2xl text-white">{parse(milestones.subTitle)}</p>
          </Fade>
          <p className="mt-6 text-lg">{milestones.des}</p>
        </div>
        {milestones.items.map((item, index) => (
          <Items
            key={index}
            reverse={item.reverse}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MileStones;
