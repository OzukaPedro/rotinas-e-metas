import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";
import ChangeTheme from "@/components/Header/ChangeTheme/page";
import LoginForm from "@/components/LoginForm/page";
import Link from "next/link";

export default function Login() {
  return (
    <Container
      direction={Direction.Column}
      className="min-h-screen
                dark:bg-[#181818] dark:text-gray-100
                bg-gray-50 text-gray-900 
                "
    >
      <Container className="w-full justify-start items-start h-0 p-3  ">
        <div className="flex justify-center items-center gap-4 ">
          <ChangeTheme />
          <Link href="/" className="border p-1 px-2 font-bold rounded-md">
            HOME
          </Link>
        </div>
      </Container>
      <Container className="flex-1">
        <LoginForm />
      </Container>
    </Container>
  );
}
