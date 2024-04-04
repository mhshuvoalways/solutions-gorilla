import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import Footer from "../components/footer";
import WeProvides from "../components/provides";
import ReferenceArchitecture from "../components/referenceArchitecture";
import Trial from "../components/trial";

const OurProcess = () => {
  return (
    <>
      <ReactHelmet>
        <title>Gorilla Solutions - Platform architecture</title>
        <meta
          content="Architecture overview of our solution"
          name="description"
        />
        <meta
          content="Gorilla Solutions - Platform architecture"
          property="og:title"
        />
        <meta
          content="Architecture overview of our solution"
          property="og:description"
        />
        <meta
          content="Gorilla Solutions - Platform architecture"
          property="twitter:title"
        />
        <meta
          content="Architecture overview of our solution"
          property="twitter:description"
        />
      </ReactHelmet>
      <div className="container mx-auto">
        <Header />
        <ReferenceArchitecture />
        <WeProvides />
        <Trial />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
