import DropDown from "../common/DropDown";

const Header = () => {
  const items = ["Our Process", "The Platform", "Pricing", "About Us", ""];

  return (
    <header className="flex items-center justify-between gap-5 py-4 sticky top-0 z-50 backdrop-blur-sm">
      <img src="/images/logo.svg" className="w-72 cursor-pointer" />
      <ul className="items-center justify-between gap-4 font-medium text-lg hidden lg:flex">
        <li className="cursor-pointer hover:bg-gray-700 py-1 px-4 rounded-full">
          Our Process
        </li>
        <li className="cursor-pointer hover:bg-gray-700 py-1 px-4 rounded-full">
          The Platform
        </li>
        <li className="cursor-pointer hover:bg-gray-700 py-1 px-4 rounded-full">
          Pricing
        </li>
        <li className="cursor-pointer hover:bg-gray-700 py-1 px-4 rounded-full">
          About Us
        </li>
      </ul>
      <div className="lg:flex items-center gap-3 hidden">
        <button className="btn">Get a Trial</button>
        <button className="btn">Book a Demo</button>
      </div>
      <div className="block lg:hidden">
        <DropDown items={items} button="fa-solid fa-bars" />
      </div>
    </header>
  );
};

export default Header;
