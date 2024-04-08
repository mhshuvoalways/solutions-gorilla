import { useTranslation } from "react-i18next";
import ReactHelmet from "../app/ReactHelmet";
import About from "../components/about";
import Header from "../components/common/header";
import CTA from "../components/cta";
import Example from "../components/example";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Services from "../components/services";
import usePageTop from "../hook/usePageTop";

const Home = () => {
  const { t } = useTranslation();
  const cta = t("cta", { returnObjects: true });
  usePageTop();

  return (
    <>
      <ReactHelmet>
        <title>Solutions Gorilla</title>
        <meta content="Cloud Native experts" name="description" />
        <meta content="Solutions Gorilla" property="og:title" />
        <meta content="Cloud Native experts" property="og:description" />
        <meta content="Solutions Gorilla" property="twitter:title" />
        <meta content="Cloud Native experts" property="twitter:description" />
      </ReactHelmet>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <About />
        <Example />
        <Services />
        <CTA title={cta.title} description={cta.des} className="text-center" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
