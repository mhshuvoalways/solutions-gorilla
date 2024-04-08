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
      <div className="flex flex-wrap md:flex-nowrap items-center gap-6 relative">
        <Title
          title={"Tell us your story or ask us anything!"}
          className={"w-full md:w-6/12"}
        />
        <div className="w-full md:w-6/12 space-y-8">
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder="Your Name"
            name="yourName"
          />
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder="Company Name"
            name="companyName"
          />
          <input
            type="email"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder="Email Address"
            name="email"
          />
          <select
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            required
          >
            <option className="bg-rich-black">Choose use case</option>
            <option className="bg-rich-black">Request a Demo</option>
            <option className="bg-rich-black">Get a trial</option>
            <option className="bg-rich-black">Informations / Questions</option>
          </select>
          <textarea
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white h-52"
            placeholder="Anything you'd like to know?"
          />
          <button className="bg-white rounded-full w-full p-2 text-black font-bold text-lg hover:bg-sheer-white hover:text-white transition-all">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
