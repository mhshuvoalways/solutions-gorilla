import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Title from "../common/title";
import PriceItem from "./PriceItem";

const Pricing = () => {
  const { t } = useTranslation();
  const pricing = t("pricing", { returnObjects: true });

  return (
    <Element name="pricing" className={`card relative mt-28 overflow-hidden`}>
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
      <div className="relative">
        <Title title={pricing.title} className={"text-center"} />
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {pricing.items.map((item) => (
            <PriceItem item={item} key={item.id} />
          ))}
        </div>
        <p className="text-center text-2xl mt-20">
          {parse(pricing.additional)}
        </p>
        <div className="flex justify-center mt-10">
          <Link to={"/contact-us"}>
            <button className="btn">{pricing.btn}</button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Pricing;
