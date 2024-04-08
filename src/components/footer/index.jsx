import { useTranslation } from "react-i18next";
import DropDown from "../common/dropdown";

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (value) => {
    if (value === "English") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fr");
    }
  };
  return (
    <div className="flex justify-evenly items-center border-t my-20 border-sheer-white">
      <p className="text-center my-10">
        © Gorilla Solutions All Rights Reserved.
      </p>
      <DropDown
        items={[{ menu: "English" }, { menu: "French" }]}
        button={"fa-solid fa-flag"}
        bgColor="white"
        onClick={changeLanguage}
      />
    </div>
  );
};

export default Footer;
