import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Title from "../common/title";
import PriceItem from "./PriceItem";

const items = [
  {
    id: 1,
    title: "30 days Trial",
    price: "Free",
    timeline: "Limited Time Only*",
    description: [
      "The fastest way to get started with platform engineering without any risk and delay.",
      "Start your Cloud Native journey now!",
    ],
    includes: [
      "The Gorilla Platform",
      "Deployed in our infrastructure**",
      "Self-Service Built-in Templates",
    ],
    bottomText: [
      "Subject to change without notice",
      "* We offer data migration, in any cloud, if you purchase a plan later.",
    ],
  },
  {
    id: 2,
    title: "Single Gorilla",
    price: "$50,000",
    timeline: "one time fee",
    description: [
      "We deploy the platform in the  cloud of your choice, we also train your team.",
      "Then your team is responsible for taking care of the infrastructure and the upgrades.",
    ],
    includes: [
      "Robust and reliable updates",
      "Deployed in the cloud of your choice",
      "Walkthrought of your first template(s) creation",
      "Training with Platform Survey and metrics",
    ],
  },
  {
    id: 3,
    title: "Custom Gorilla",
    price: "$300/h*",
    timeline: "Contact Us",
    description: [
      "We adapt the Gorilla platform to precisely match your specifications, then we deploy it.",
      "Partner with us for expert platform engineering advice – we'll help you refine your design and explore new possibilities.",
    ],
    includes: [
      "A Custom Gorilla Platform",
      "Deployed in the cloud of your choice",
      "Walkthrought of your first template(s) creation",
      "Training with Platform Survey and metrics",
    ],
  },
  {
    id: 4,
    title: "Managed Gorilla",
    price: "$3000",
    timeline: "per month, for 1 Year",
    description: [
      "Never miss the latest features or vulnerability fix.",
      "We keep the platform up to date with our latest development.",
      "We proactively monitor your platform and provide expert support whenever needed.",
    ],
    includes: [
      "Robust and Reliable Updates",
      "Latest Features",
      "Security Updates",
      "Support",
    ],
  },
];

const index = () => {
  return (
    <Element name="pricing" className={`card relative mt-28 overflow-hidden`}>
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
      <div className="relative">
        <Title title={"Transparent Pricing"} className={"text-center"} />
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <PriceItem item={item} key={item.id} />
          ))}
        </div>
        <div className="text-center text-2xl mt-20">
          <p>{`Don't settle for less.`}</p>
          <p>Get the perfect plan for your company.</p>
        </div>
        <div className="flex justify-center mt-10">
          <Link to={"/contact-us"}>
            <button className="btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default index;
