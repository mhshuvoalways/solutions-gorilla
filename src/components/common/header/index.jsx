import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DropDown from "../dropdown";

const Header = () => {
  const { t } = useTranslation();
  const items = t("header.menus", { returnObjects: true });

  return (
    <header className="flex items-center justify-between gap-5 py-4 sticky top-0 z-30 backdrop-blur-sm">
      <Link to={"/"}>
        <img src="/images/logo.svg" className="w-72 cursor-pointer" />
      </Link>
      <ul className="items-center justify-between gap-4 font-medium text-lg hidden lg:flex">
        {items.slice(0, 4).map((item, index) => (
          <li key={index}>
            <Link
              className="cursor-pointer hover:bg-sheer-white py-2 px-4 rounded-full"
              to="/our-process"
            >
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex items-center gap-3 hidden">
        <Link to={"/contact-us"}>
          <button className="btn">{items[4].menu}</button>
        </Link>
        <Link to={"/contact-us"}>
          <button className="btn">{items[5].menu}</button>
        </Link>
      </div>
      <div className="block lg:hidden">
        <DropDown items={items} button="fa-solid fa-bars" />
      </div>
    </header>
  );
};

export default Header;
