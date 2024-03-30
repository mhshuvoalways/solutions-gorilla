import { Fade } from "react-awesome-reveal";

const index = () => {
  return (
    <div
      className={`card relative flex items-center flex-wrap lg:flex-nowrap justify-evenly gap-20 mt-28 overflow-hidden`}
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
      <img
        src="/images/blurred-circle-tiny.png"
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute -bottom-[30vw] left-[20vw]"
      />
      <div className="w-full lg:w-5/12 z-10 relative">
        <img src="/images/dashboard.png" className="rounded-xl" />
        <img
          src="/images/gorilla.png"
          className="absolute w-4/12 -bottom-20 left-[33%]"
        />
      </div>
      <div className="w-full lg:w-5/12 z-10">
        <Fade direction="up">
          <p className="text-white title">
            Take full control over your Platform Engineering journey
          </p>
        </Fade>
        <p className="text-xl">
          With our free trial, you have nothing to lose, you can explore what we
          have to offer without even spending a penny. Just reach out to get
          started!
        </p>
        <div className="mt-5 flex items-center gap-2 text-white">
          <button className="underline hover:text-off-white">Contact Us</button>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
