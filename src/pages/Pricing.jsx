import ReactHelmet from "../app/ReactHelmet";
import Calculator from "../components/calculator";
import Header from "../components/common/header";
import Footer from "../components/footer";

const OurProcess = () => {
  return (
    <>
      <ReactHelmet>
        <title>Gorilla Solutions - Pricing</title>
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
        <Calculator />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
