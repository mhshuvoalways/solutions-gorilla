import { Link } from "react-router-dom";
import Title from "../common/title";

const index = ({ title, description, className }) => {
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
      <div className={`relative ${className}`}>
        <Title title={title} />
        <p className="text-2xl">{description}</p>
        <Link to={"/contact-us"}>
          <button className="btn mt-10">Get in touch</button>
        </Link>
      </div>
    </div>
  );
};

export default index;
