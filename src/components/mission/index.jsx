import Title from "../common/title";

const index = () => {
  return (
    <div className={`card relative overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-10"
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
        <Title title={"Our Mission"} />
        <div className="flex items-center justify-center gap-10 flex-wrap md:flex-nowrap">
          <p className="w-full md:w-7/12 text-lg">
            We aim to accelerate platform engineering delivery for 100 companies
            of all sizes within the next 5 years, empowering them to focus on
            their core innovations.
            <br />
            <br />
            We champion the transformative power of open-source and cloud-native
            technologies.
            <br />
            <br />
            We believe in platform ownership and the freedom to customize for
            your unique needs.
            <br />
            <br />
            We strive to be your trusted innovation partner, committed to
            continuous evolution alongside your growth.
          </p>
          <p className="h-60 border border-sheer-white hidden md:block"></p>
          <p className="w-full md:w-5/12 text-2xl text-white tracking-wide">
            {`“Your platform, our expertise – let's innovate together and accelerate your journey”`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
