import { Fade } from "react-awesome-reveal";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div
      className={`card lg:py-0 relative flex items-center flex-wrap lg:flex-nowrap gap-5 overflow-hidden`}
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
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute"
      />
      <div className="relative space-y-6 w-full lg:w-8/12">
        <Fade direction="up">
          <p className="text-5xl text-white font-semibold">
            Build your dream Platform <br />
            within weeks, Not Months.
          </p>
        </Fade>
        <p className="text-2xl">
          Launch your platform journey in just 4 weeks!
        </p>
        <div className="text-2xl">
          <p>Our program delivers a comprehensive foundation including:</p>
          <ul>
            <li>- Self-service capabilities</li>
            <li>- Infrastructure setup</li>
            <li>- Observability (metrics, logs, tracing, APM)</li>
            <li>- Security tooling</li>
            <li>- Continuous delivery</li>
            <li>- Customizable templates</li>
            <li>- And more</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button className="btn">Check out our 4 Weeks Program</button>
          <button className="btn">Discover the Architecture</button>
        </div>
      </div>
      <div className="w-10/12 mx-auto lg:w-4/12 h-full">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
