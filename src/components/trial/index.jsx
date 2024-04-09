import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../common/title";

const Trial = () => {
  const { t } = useTranslation();
  const trial = t("trial", { returnObjects: true });

  return (
    <div className="bg-rich-black mt-20 card text-center">
      <div className="w-full sm:w-7/12 mx-auto space-y-10">
        <Title title={trial.title} />
        <Fade direction="up">
          <p className="text-2xl">{trial.subTitle}</p>
        </Fade>
        <Link to={"/contact-us"}>
          <button className="btn mt-10">{trial.btn}</button>
        </Link>
        <p className="text-gray-500 text-sm">{trial.des}</p>
      </div>
    </div>
  );
};

export default Trial;
