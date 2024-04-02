import Title from "../common/title";

const items = [
  {
    icon: "/icons/bar-icon.svg",
    title: "Developer Control Plane",
  },
  {
    icon: "/icons/message.svg",
    title: "Integration and Delivery Plane",
  },
  {
    icon: "/icons/head-icon.svg",
    title: "Observability Plane",
  },
  {
    icon: "/icons/light-icon.svg",
    title: "Security Plane",
  },
  {
    icon: "/icons/light-icon.svg",
    title: "Resource Plane",
  },
];

const index = () => {
  return (
    <div className="mt-28 card bg-rich-black">
      <Title
        title={"Built on Open-Source for Flexibility"}
        className={"text-center"}
      />
      <div className="mt-20 mx-auto flex items-center justify-center gap-20 relative">
        <div className="w-[28%] space-y-5">
          {items.map((item, index) => (
            <div
              className="flex items-center p-5 hover:bg-sheer-white gap-6 rounded-lg cursor-pointer justify-between border-sheer-white border hover:border-deep-purple transition-all"
              key={index}
            >
              <img src={item.icon} />
              <p className="text-lg text-white font-semibold text-nowrap">
                {item.title}
              </p>
              <img src="/icons/chevron-right.svg" />
            </div>
          ))}
        </div>
        <div className="w-5/12">
          <p className="text-2xl font-semibold text-white">
            Streamline Dev Workflow
          </p>
          <div className="mt-5 text-lg">
            <p>
              <strong className="text-white font-semibold">
                Automate your release process:{" "}
              </strong>
              Streamline complex deployments and rollouts, complete with
              built-in safety checks.
              <br />
              <br />
              <strong className="text-white font-semibold">
                Manage environments with ease:
              </strong>{" "}
              Seamlessly handle multiple environments for testing, staging, and
              production.
              <br />
              <br />
              <strong className="text-white font-semibold">
                Securely store packages:
              </strong>{" "}
              Protect your software packages in a highly secure repository.
              <br />
              <br />‍
              <strong className="text-white font-semibold">
                Test and mitigate risk:
              </strong>{" "}
              Experiment with new features and changes, using easy testing
              mechanisms to reduce risk.
              <br />
              <br />
              <strong className="text-white font-semibold">
                Instant rollbacks:
              </strong>{" "}
              If issues arise, quickly revert to a previous working version in
              seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
