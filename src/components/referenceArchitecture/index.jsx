import { Link } from "react-scroll";
import ButtonArrow from "../common/buttons/ButtonArrow";
import Title from "../common/title";

const index = () => {
  return (
    <div className={`card relative overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-30 bg-cover"
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
        <Title title="Our Technology Stack" className={"mb-0"} />
        <Title
          title="Powered by 50+ CNCF Projects"
          className="text-4xl -tracking-wide"
        />
        <p className="text-2xl text-white">
          Everything you need to hit the ground running
        </p>
        <p className="mt-10 text-left w-full sm:w-10/12 lg:w-4/12 mx-auto">
          {`Partner with us to unlock the power of the CNCF ecosystem. Our team's
          deep experience ensures you get the best in cloud-native scalability,
          security, and innovation.`}
        </p>
        <img
          src="/images/reference-architecture.png"
          className="mt-28 w-full sm:w-9/12 mx-auto"
        />
        <Link to="provides" spy={true} smooth={true}>
          <ButtonArrow title={"Features"} />
        </Link>
      </div>
    </div>
  );
};

export default index;
