import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <div className="mt-28 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
      {services.map((el, index) => (
        <div
          className="rounded-2xl border-sheer-white border transition-all bg-sheer-white p-10 space-y-20 shadow-xl hover:bg-sheer-white hover:border-deep-purple hover:border"
          key={index}
        >
          <img src={`/icons/${el.img}`} />
          <p className="text-lg">{el.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
