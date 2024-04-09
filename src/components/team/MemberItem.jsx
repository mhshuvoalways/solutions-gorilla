import { Link } from "react-router-dom";

const MemberItem = ({
  reverse,
  image,
  name,
  jobTitle,
  description,
  linkedin,
}) => {
  return (
    <div
      className={`flex items-center md:items-end justify-center flex-wrap gap-10 mt-20 ${
        reverse && "flex-row-reverse"
      }`}
    >
      <img src={`/images/${image}`} className="w-full sm:w-3/12" />
      <div className="w-full sm:w-5/12">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-white tracking-wide">{name}</p>
          <Link to={linkedin} target="blank">
            <img src="/icons/linkedin.svg" />
          </Link>
        </div>
        <p className="mt-5 text-sm">{jobTitle}</p>
        <p className="text-lg mt-10">{description}</p>
      </div>
    </div>
  );
};

export default MemberItem;
