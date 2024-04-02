import { Fade } from "react-awesome-reveal";
import Title from "../common/title";

const index = () => {
  return (
    <div className={`card relative overflow-hidden mt-28`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-20 bg-cover"
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(341deg, rgba(0, 0, 0, 0), #000)`,
        }}
      ></div>
      <img
        src="/images/blurred-circle-tiny.png"
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute"
      />
      <div className="relative text-center">
        <Title title={"Compare Gorilla"}></Title>
        <Fade direction="up">
          <p className="text-2xl">
            Streamline your Platform at a fraction of the time.
          </p>
        </Fade>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 w-8/12 mx-auto mt-20">
          <img src="/images/logo.svg" className="w-10/12 sm:w-3/12 mx-auto" />
          <div className="border p-3 rounded w-full flex items-center gap-6">
            <div className="relative h-6 w-full sm:w-3/12">
              <p className="bg-sheer-white rounded absolute inset-0" />
              <p
                className="absolute inset-0 rounded"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0), #fff)`,
                }}
              />
            </div>
            <p className="font-semibold">1 Month</p>
          </div>
        </div>
        <div className="flex mt-7 justify-center gap-2 sm:gap-6 text-lg font-semibold text-white text-nowrap flex-wrap">
          <p>Without Us</p>
          <p className="bg-sheer-white rounded h-6 w-full  sm:w-5/12" />
          <p>4 to 12 Months*</p>
        </div>
        <p className="mt-20 text-lg italic">
          *The time required to build a platform is highly variable. <br />
          Factors such as complexity, team size, and available resources
          significantly impact your platform development time.
        </p>
      </div>
    </div>
  );
};

export default index;
