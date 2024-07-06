import { Fade } from "react-awesome-reveal";
import Title from "../common/title";
import Item from "./Item";

const items = [
  {
    title: "15 minutes session",
    des: "Maybe you have just a few questions or want to get to know each other ? This is the perfect place for it!",
    url: "https://app.apollo.io/#/meet/solutions-gorilla-aproulx/15-min",
  },
  {
    title: "30 minutes session",
    des: "You think we could collaborate on something and want to discuss about it ? Let’s roll!",
    url: "https://app.apollo.io/#/meet/solutions-gorilla-aproulx/30-min",
  },
  {
    title: "1 hour session",
    des: "You have many ideas and are eager to discuss them. 60 minutes might not even be enough? Let’s start from there !",
    url: "https://app.apollo.io/#/meet/solutions-gorilla-aproulx/60-min",
  },
];

const index = () => {
  return (
    <>
      <div className="flex items-center justify-center md:justify-between mt-10 md:mt-20 flex-wrap md:flex-nowrap gap-10 card flex-col-reverse md:flex-row">
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
        <div className="w-full md:w-7/12">
          <Title title="StartupFest 2024" />
          <Fade direction="up">
            <p className="text-white">{`We will be on-site for the event on July 10th, 11th, and 12th. We look
          forward to making many new connections! If we don't get a chance to
          meet in person or if you'd like to discuss further, please use the
          link below to schedule a meeting with us.`}</p>
          </Fade>
          <p className="text-lg"></p>
        </div>
        <img src="/images/startLogo.png" className="w-56 z-10" />
      </div>
      <div name="pricing" className={`card relative mt-28 overflow-hidden`}>
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
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {items.map((el, index) => (
              <div key={index}>
                <Item item={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
