import ChangeTheme from "./ChangeTheme/page";
import Menu from "./Menu/page";
import UserIcon from "./UserIcon/page";

export default function Header() {
  return (
    <>
      <div
        className="flex justify-between items-center w-full p-3 px-6
      border-b dark:border-gray-800 border-gray-400 shadow-md
    dark:bg-[#2c3333] bg-[#aaaaaa]"
      >
        <ChangeTheme />
        <Menu />
        <UserIcon />
      </div>
    </>
  );
}
