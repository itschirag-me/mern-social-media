import { PropsWithChildren } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({
  onSidebar,
}: PropsWithChildren<{ onSidebar: () => void }>) => {
  return (
    <div className="w-full flex gap-4 items-center h-16 bg-white border-b-[0.8px] px-5">
      <span
        onClick={onSidebar}
        className="cursor-pointer font-semibold xl:hidden lg:hidden md:hidden"
      >
        <AiOutlineMenu className="text-violet-600 text-xl" />
      </span>
      <span className="font-pressStart text-violet-500">MadChat</span>
    </div>
  );
};

export default Navbar;
