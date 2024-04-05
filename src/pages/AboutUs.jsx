import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Mission from "../components/mission";
import Team from "../components/team";

const OurProcess = () => {
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
          title={"Get in touch"}
          description={`We value your questions, feedback, and comments and are always welcome. If you require any assistance or information about our platform or services, please don't hesitate to reach out to our team.`}
          className={"w-full sm:w-7/12"}
        />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
