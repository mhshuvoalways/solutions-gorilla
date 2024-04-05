import Title from "../common/title";
import MemberItem from "./MemberItem";

const memberItems = [
  {
    id: 1,
    name: "Félix Germain",
    description: `Félix brings over 10 years of experience in software development
      devops and architecture. Accomplished leader with strong development
      experience and extensive knowledge of Cloud and Cloud Native
      solutions. Félix is committed to delivering seamless platform
      transformations while driving innovation.`,
    img: "member1.png",
    reverse: false,
    linkedin: "https://www.linkedin.com/in/solutions-gorilla-fgermain/",
  },
  {
    id: 2,
    name: "Alexandre Proulx",
    description: `Experienced platform architect specializing in cloud-native technologies. Skilled in building robust, scalable platforms and fostering seamless developer experiences with tools like Kubernetes and Backstage. Passionate about driving innovation and streamlining complex workflows.`,
    img: "member2.png",
    reverse: true,
    linkedin: "https://www.linkedin.com/in/solutions-gorilla-aproulx/",
  },
];

const index = () => {
  return (
    <div className="mt-28">
      <Title title={"Our Team"} className={"text-center"} />
      {memberItems.map((item) => (
        <MemberItem
          key={item.id}
          image={item.img}
          name={item.name}
          description={item.description}
          reverse={item.reverse}
          linkedin={item.linkedin}
        />
      ))}
    </div>
  );
};

export default index;
