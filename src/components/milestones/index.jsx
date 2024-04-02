import { Fade } from "react-awesome-reveal";
import Title from "../common/title";
import Items from "./items";

const items = [
  {
    image: "/images/rocket.jpeg",
    title: "Week 1",
    subTitle: "Platform Foundation Deployment",
    description:
      "We seamlessly deploy our open-source and cloud native platform foundation into your existing cloud infrastructure. This provides a robust base for the benefits to come.",
  },
  {
    reverse: true,
    image: "/images/tree.jpeg",
    title: "Week 2",
    subTitle: "Self service component training",
    description:
      "We collaborate with your engineers, providing hands-on training and guidance in the development of reusable templates. This empowers your team to drive future innovation and customization.",
  },
  {
    image: "/images/root.jpeg",
    title: "Week 3",
    subTitle: "Stabilization and Enhancement",
    description:
      "After the initial deployment, we offer ongoing support and collaboration. This ensures platform stability while empowering your team to customize and optimize it to meet your evolving business requirements.",
  },
  {
    reverse: true,
    image: "/images/business.jpeg",
    title: "Week 4",
    subTitle: "Survey and Feedback",
    description:
      "We dedicate the final week to work with team(s) to start using the first template(s) and to gather comprehensive data surveys and feedback from developers and engineers. This input will serve as a foundation to understand next steps of the platform iterations and ensure it fully aligns with your engineers and company needs.",
  },
  {
    image: "/images/path.jpeg",
    title: "Week 5+",
    subTitle: "Your journey truly begins",
    description:
      "From here, you fully own your platform, and your journey of continuous improvement and innovation truly begins. We stay around to continue knowledge transfer and to operate things if needed. We are  available to help as trusted advisor and to discuss improvement and integration.",
  },
];

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
      <div className="relative space-y-16">
        <div className="w-full md:w-10/12 lg:w-7/12">
          <Title title={"Key Milestones"} className={"text-7cl"} />
          <Fade direction="up">
            <p className="text-2xl text-white">
              Your platform, truly, <br />
              within 4 weeks
            </p>
          </Fade>
          <p className="mt-6 text-lg">
            Experience a rapid transformation in weeks. Our solution equips your
            engineers with self-service capabilities, eliminates deployment
            roadblocks, and dramatically reduces the amount of time required to
            build your MVP.
          </p>
        </div>
        {items.map((item, index) => (
          <Items
            key={index}
            reverse={item.reverse}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
