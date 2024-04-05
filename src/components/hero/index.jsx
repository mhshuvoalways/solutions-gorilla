import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div
      className={`card lg:py-0 flex items-center flex-wrap lg:flex-nowrap gap-5`}
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
      <div className="relative w-full lg:w-8/12">
        <Fade direction="up">
          <p className="text-3xl sm:text-5xl text-white font-semibold">
            Build your dream Platform <br />
            within weeks, Not Months.
          </p>
        </Fade>
        <p className="text-2xl mt-6">
          Launch your platform journey in just 4 weeks!
        </p>
        <div className="text-2xl mt-6">
          <p>Our program delivers a comprehensive foundation including:</p>
          <ul>
            <li>
              - <p className="inline text-white font-semibold">Self-service</p>{" "}
              capabilities
            </li>
            <li>
              -{" "}
              <p className="inline text-white font-semibold">Infrastructure</p>{" "}
              setup
            </li>
            <li>
              - <p className="inline text-white font-semibold">Observability</p>{" "}
              (metrics, logs, tracing, APM)
            </li>
            <li>
              - <p className="inline text-white font-semibold">Security</p>{" "}
              tooling
            </li>
            <li>
              -{" "}
              <p className="inline text-white font-semibold">
                Continuous delivery
              </p>
            </li>
            <li>
              - Customizable{" "}
              <p className="inline text-white font-semibold">templates</p>
            </li>
            <li>- And more</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 flex-wrap mt-20">
          <Link to={"/our-process"}>
            <button className="btn">Check out our 4 Weeks Program</button>
          </Link>
          <Link to={"/architecture"}>
            <button className="btn">Discover the Architecture</button>
          </Link>
        </div>
      </div>
      <div className="w-10/12 mx-auto lg:w-4/12 h-full">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
