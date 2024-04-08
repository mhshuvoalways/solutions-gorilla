import { useTranslation } from "react-i18next";
import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Mission from "../components/mission";
import Team from "../components/team";
import usePageTop from "../hook/usePageTop";

const OurProcess = () => {
  usePageTop();

  const { t } = useTranslation();
  const cta = t("cta", { returnObjects: true });

  return (
    <>
      <ReactHelmet>
        <title>Gorilla Solutions - Company</title>
        <meta content="Cloud Native experts" name="description" />
        <meta content="Gorilla Solutions - Company" property="og:title" />
        <meta content="Cloud Native experts" property="og:description" />
        <meta content="Gorilla Solutions - Company" property="twitter:title" />
        <meta content="Cloud Native experts" property="twitter:description" />
      </ReactHelmet>
      <div className="container mx-auto">
        <Header />
        <Mission />
        <Team />
        <CTA
          title={cta.btn}
          description={cta.about}
          className={"w-full sm:w-7/12"}
        />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
