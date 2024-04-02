import ReactHelmet from "../app/ReactHelmet";
import Header from "../components/common/header";
import CompareGorilla from "../components/compareGorilla";
import Footer from "../components/footer";
import MileStones from "../components/milestones";
import Trial from "../components/trial";

const OurProcess = () => {
  return (
    <>
      <ReactHelmet>
        <title>Gorilla Solutions - The Process</title>
        <meta charset="utf-8" />
        <meta
          content="In-depth explanation of our monthly process to enable your platform engineering journey."
          name="description"
        />
        <meta content="Gorilla Solutions - The Process" property="og:title" />
        <meta
          content="In-depth explanation of our monthly process to enable your platform engineering journey."
          property="og:description"
        />
        <meta
          content="Gorilla Solutions - The Process"
          property="twitter:title"
        />
        <meta
          content="In-depth explanation of our monthly process to enable your platform engineering journey."
          property="twitter:description"
        />
      </ReactHelmet>
      <div className="container mx-auto">
        <Header />
        <MileStones />
        <CompareGorilla />
        <Trial />
        <Footer />
      </div>
    </>
  );
};

export default OurProcess;
