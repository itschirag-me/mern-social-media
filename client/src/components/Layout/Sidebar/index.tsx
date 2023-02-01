import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { HiOutlineNewspaper, HiOutlineChatAlt2, HiOutlineUserGroup } from "react-icons/hi";

const Sidebar = ({isOpen}: PropsWithChildren<{isOpen: boolean}>) => {
  const navList = [
    {
      path: "/",
      name: "News feeds",
      icon: <HiOutlineNewspaper />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <HiOutlineChatAlt2 />,
    },
    {
      path: "/group",
      name: "Groups",
      icon: <HiOutlineUserGroup />,
    },
  ]

  return (
    <div
      className={`flex flex-col justify-between w-60 xl:ml-0 lg:ml-0 md:ml-0 h-full bg-white border-r-[0.6px] duration-300 ease-in-out ${
        !isOpen ? "-ml-60 absolute" : "xl:relative lg:relative md:relative absolute"
      }`}
    >
      <div className="flex flex-col list-none">
        {navList.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`w-full py-4 flex gap-2 items-center font-medium uppercase border-b-[0.5px] text-gray-500 hover:text-white hover:bg-violet-500 cursor-pointer px-5`}
          >
            <span className="xl:text-xl lg:text-xl md:text-lg text-lg">{item.icon}</span>
            <span className="mt-0.5 xl:text-xs lg:text-xs md:text-xs text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center p-2 border-t-[0.5px] border-violet-400">
        <span className="w-12 h-12 bg-gray-100 rounded-full"></span>
        <span className="ml-5 uppercase font-medium text-white">Chirag raja</span>
      </div>
    </div>
  );
};

export default Sidebar;
