import ScreenShots from "../common/screenshots";
import Title from "../common/title";

const index = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly mt-28 flex-wrap sm:flex-nowrap gap-10">
        <div className="w-full sm:w-3/12 relative">
          <ScreenShots image="/images/settings.jpeg" />
        </div>
        <div className="w-full sm:w-5/12">
          <Title title={"Platform, Portal, DevOps, DevX"} />
          <p className="text-xl">
            We hand over to your Team of Platform and DevOps Engineers a solid
            foundation that just works.
            <br />
            <br />
            This foundation is the pillar of the first template we will help you
            build.
            <br />
            <br />
            Once the template is built, then it can be used for migrating your
            applications or to deploy new applications and projects.
            <br />
            <br />‍ We offer our customer and their customers, the developers,
            the most simplified and exciting experience for debugging and
            deploying applications in kubernetes.
          </p>
          <div className="mt-5 flex items-center gap-2 text-white underline hover:text-off-white cursor-pointer">
            <button>Explore the platform</button>
            <img src="/icons/arrow-right.svg" className="w-5" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-28 flex-wrap sm:flex-nowrap gap-10">
        <div className="w-full sm:w-5/12">
          <Title title={"Based on Cloud Native and Open-Source"} />
          <p className="text-xl">
            We believe in customer freedom. We opt-in a flexible approach that
            allow our foundation to be deployed on any cloud.
            <br />
            <br />
            We deploy and integrate 50+ Open Source and/or CNCF products. If you
            Opt-in for managed services, we also provide updates and support.
            <br />
            <br />
            We also offer cloud relocation and cloud migration in case you have
            a change of hearth.
          </p>
          <div className="mt-5 flex items-center gap-2 text-white underline hover:text-off-white cursor-pointer">
            <button>Explore the platform</button>
            <img src="/icons/arrow-right.svg" className="w-5" />
          </div>
        </div>
        <div className="w-full sm:w-3/12 flex justify-center items-center">
          <img
            src="/images/bg-lines.svg"
            className="absolute -z-10 opacity-40"
          />
          <div className="">
            <img src="/images/architecture.png" className="z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
