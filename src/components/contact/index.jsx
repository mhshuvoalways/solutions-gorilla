import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/title";

const Contact = () => {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });
  const [state, setState] = useState({
    name: "",
    company: "",
    email: "",
    reason: "",
    message: "",
  });
  const [clicked, setClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setClicked(false);
    setErrorMessage("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      state.name &&
      state.company &&
      state.email &&
      state.reason &&
      state.message
    ) {
      setClicked(true);
      setErrorMessage("");
      try {
        const response = await fetch(
          "https://n8n.oracle.alebox.xyz/webhook/3987f8bf-7592-4359-9337-dabd2fc43d83/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Basic bGFuZGluZzoqI1h1V0Ejd2ZQU0VnXjV0dG52NF41c0Q=",
            },
            body: JSON.stringify(state),
          }
        );
        if (response.ok) {
          setErrorMessage("Thank you! Your submission has been received!");
          setState({
            name: "",
            company: "",
            email: "",
            reason: "",
            message: "",
          });
          setClicked(false);
        } else {
          setErrorMessage(
            "Oops! Something went wrong while submitting the form."
          );
          setClicked(false);
        }
      } catch (error) {
        setErrorMessage(
          "Oops! Something went wrong while submitting the form."
        );
        setClicked(false);
      }
    }
  };

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
        <form className="w-full md:w-6/12 space-y-8" onSubmit={onSubmit}>
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.name.placeholder}
            name={contact.form.name.name}
            onChange={onChange}
            required
            value={state.name}
          />
          <input
            type="text"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.company.placeholder}
            name={contact.form.company.name}
            onChange={onChange}
            required
            value={state.company}
          />
          <input
            type="email"
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            placeholder={contact.form.email.placeholder}
            name={contact.form.email.name}
            onChange={onChange}
            required
            value={state.email}
          />
          <select
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white"
            required
            name={contact.form.reason.name}
            onChange={onChange}
            value={state.reason}
          >
            <option value={""}>{contact.form.reason.default}</option>
            {contact.form.reason.options.map((op, index) => (
              <option className="bg-rich-black" key={index}>
                {op}
              </option>
            ))}
          </select>
          <textarea
            className="bg-sheer-white w-full rounded-lg py-3 px-5 font-semibold text-lg outline-0 focus:ring-1 transition-shadow text-white h-52"
            placeholder={contact.form.message.placeholder}
            required
            name={contact.form.message.name}
            onChange={onChange}
            value={state.message}
          />
          <p
            className={`text-lg font-bold ${
              errorMessage
                ? errorMessage.includes("Oops!")
                  ? "opacity-100 text-red-600"
                  : "opacity-100 text-green-600"
                : "opacity-0"
            }`}
          >
            {errorMessage}
          </p>
          <button
            className={`bg-white rounded-full w-full p-2 text-black font-bold text-lg hover:bg-sheer-white hover:text-white transition-all ${
              clicked && "opacity-20 cursor-not-allowed"
            }`}
            disabled={clicked}
          >
            {contact.form.btn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
