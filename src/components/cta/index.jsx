import { Fade } from "react-awesome-reveal";

const index = () => {
  return (
    <div
      className={`card relative flex items-center flex-wrap lg:flex-nowrap justify-center mt-28 overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-10 bg-cover"
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(341deg, rgba(0, 0, 0, 0), #000)`,
        }}
      ></div>
      <div className="z-10 text-center">
        <Fade direction="up">
          <p className="title">We build, We train, you own</p>
        </Fade>
        <p className="text-2xl">
          Reach out to our team and start owning your Platform and DevX today!
        </p>
        <button className="btn mt-10">Get in touch</button>
      </div>
    </div>
  );
};

export default index;
