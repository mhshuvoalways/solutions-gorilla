import { Link } from "react-router-dom";
import DropDown from "../dropdown";

const Header = () => {
  const items = [
    { menu: "Our Process", url: "/our-process" },
    { menu: "The Platform", url: "/architecture" },
    { menu: "Pricing", url: "/pricing" },
    { menu: "About Us", url: "/about-us" },
    { menu: "Get a Trial", url: "/contact-us" },
    { menu: "Book a Demo", url: "/contact-us" },
  ];

  return (
    <header className="flex items-center justify-between gap-5 py-4 sticky top-0 z-30 backdrop-blur-sm">
      <Link to={"/"}>
        <img src="/images/logo.svg" className="w-72 cursor-pointer" />
      </Link>
      <ul className="items-center justify-between gap-4 font-medium text-lg hidden lg:flex">
        <li>
          <Link
            className="cursor-pointer hover:bg-sheer-white py-2 px-4 rounded-full"
            to="/our-process"
          >
            Our Process
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:bg-sheer-white py-2 px-4 rounded-full"
            to="/architecture"
          >
            The Platform
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:bg-sheer-white py-2 px-4 rounded-full"
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer hover:bg-sheer-white py-2 px-4 rounded-full"
            to="/about-us"
          >
            About Us
          </Link>
        </li>
      </ul>
      <div className="lg:flex items-center gap-3 hidden">
        <Link to={"/contact-us"}>
          <button className="btn">Get a Trial</button>
        </Link>
        <Link to={"/contact-us"}>
          <button className="btn">Book a Demo</button>
        </Link>
      </div>
      <div className="block lg:hidden">
        <DropDown items={items} button="fa-solid fa-bars" />
      </div>
    </header>
  );
};

export default Header;
