import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import ButtonArrow from "../common/buttons/ButtonArrow";
import Title from "../common/title";

const ReferArct = () => {
  const { t } = useTranslation();
  const referact = t("referact", { returnObjects: true });

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
      <div className="relative text-center">
        <Title title={referact.title} className={"mb-0"} />
        <Title title={referact.subTitle} className="text-4xl -tracking-wide" />
        <p className="text-2xl text-white">{referact.des}</p>
        <p className="mt-10 text-left w-full sm:w-10/12 lg:w-4/12 mx-auto">
          {referact.subDes}
        </p>
        <img
          src="/images/reference-architecture.png"
          className="mt-28 w-full sm:w-9/12 mx-auto"
        />
        <Link to="provides" spy={true} smooth={true}>
          <ButtonArrow title={referact.btn} />
        </Link>
      </div>
    </div>
  );
};

export default ReferArct;
