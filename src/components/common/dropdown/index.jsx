import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function DropDown({ items, button, onClick }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <i className={button} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg">
          <div className="px-1 py-1 border border-sheer-white rounded-md">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {onClick
                  ? ({ active }) => (
                      <p
                        className={`${
                          active ? "text-white" : "text-off-white"
                        } flex w-full items-center px-2 py-2 cursor-pointer font-medium text-lg`}
                        onClick={() => onClick(item.menu)}
                      >
                        {item.menu}
                      </p>
                    )
                  : ({ active }) => (
                      <Link to={item.url}>
                        <p
                          className={`${
                            active ? "text-white" : "text-off-white"
                          } flex w-full items-center px-2 py-2 cursor-pointer font-medium text-lg`}
                        >
                          {item.menu}
                        </p>
                      </Link>
                    )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
