import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import Contact from "../components/contact";
import Footer from "../components/footer";
import usePageTop from "../hook/usePageTop";

const OurProcess = () => {
  usePageTop();

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
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
