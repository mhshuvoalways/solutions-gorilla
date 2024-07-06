import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import Footer from "../components/footer";
import StartUpHeader from "../components/startup";
import usePageTop from "../hook/usePageTop";

const OurProcess = () => {
  usePageTop();

  return (
    <>
      <ReactHelmet>
        <title>Gorilla Solutions - StartupFest</title>
        <meta
          content="Multiple flexible pricing solutions"
          name="description"
        />
        <meta content="Gorilla Solutions - Pricing" property="og:title" />
        <meta
          content="Multiple flexible pricing solutions"
          property="og:description"
        />
        <meta content="Gorilla Solutions - Pricing" property="twitter:title" />
        <meta
          content="Multiple flexible pricing solutions"
          property="twitter:description"
        />
      </ReactHelmet>
      <div className="container mx-auto">
        <Header />
        <StartUpHeader />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
