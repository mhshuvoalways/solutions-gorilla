import { useTranslation } from "react-i18next";
import Title from "../common/title";
import MemberItem from "./MemberItem";

const Team = () => {
  const { t } = useTranslation();
  const members = t("members", { returnObjects: true });

  return (
    <div className="mt-28">
      <Title title={members.title} className={"text-center"} />
      {members.items?.map((item) => (
        <MemberItem
          key={item.id}
          image={item.img}
          name={item.name}
          jobTitle={item.jobTitle}
          description={item.description}
          reverse={item.reverse}
          linkedin={item.linkedin}
        />
      ))}
    </div>
  );
};

export default Team;
