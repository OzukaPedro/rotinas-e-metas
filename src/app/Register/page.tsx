import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";
import ChangeTheme from "@/components/Header/ChangeTheme/page";
import RegisterForm from "@/components/RegisterForm/page";
import Link from "next/link";

export default function Register() {
  return (
    <Container
      direction={Direction.Column}
      className="min-h-screen
                dark:bg-gradient-to-r dark:from-[#181818] dark:to-gray-800 dark:text-gray-100
                bg-gradient-to-r from-gray-100 to-gray-400 text-gray-900 
                "
    >
      <Container className="w-full justify-start items-start h-0 p-3  ">
        <div className="flex justify-center items-center gap-4 ">
          <ChangeTheme />
          <Link
            href="/"
            className="border p-1 px-2 font-bold rounded-md relative z-50"
          >
            HOME
          </Link>
        </div>
      </Container>
      <Container className="flex-1 w-full">
        <RegisterForm />
      </Container>
    </Container>
  );
}
