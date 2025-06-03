import ChangeTheme from "./ChangeTheme/page";
import UserIcon from "./UserIcon/page";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full p-3 px-6">
        <ChangeTheme />
        <h1>a</h1>
        <UserIcon />
      </div>
    </>
  );
}
