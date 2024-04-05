import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import Footer from "../components/footer";

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
        Comming soon
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
