import { useTranslation } from "react-i18next";
import Title from "../common/title";

const Contact = () => {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });

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
        <Title title={contact.title} className={"w-full md:w-6/12"} />
        <div className="w-full md:w-6/12 space-y-8">
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.yourName.placeholder}
            name={contact.form.yourName.name}
          />
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.companyName.placeholder}
            name={contact.form.companyName.name}
          />
          <input
            type="email"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.email.placeholder}
            name={contact.form.email.name}
          />
          <select
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            required
            name={contact.form.select.name}
          >
            {contact.form.select.options.map((op, index) => (
              <option className="bg-rich-black" key={index}>
                {op}
              </option>
            ))}
          </select>
          <textarea
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white h-52"
            placeholder={contact.form.textarea.placeholder}
            name={contact.form.textarea.name}
          />
          <button className="bg-white rounded-full w-full p-2 text-black font-bold text-lg hover:bg-sheer-white hover:text-white transition-all">
            {contact.form.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
