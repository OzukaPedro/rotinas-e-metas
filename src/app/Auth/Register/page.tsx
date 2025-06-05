import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";
import ChangeTheme from "@/components/Header/ChangeTheme/page";
import RegisterForm from "@/components/RegisterForm/page";
import Link from "next/link";

export default function Register() {
  return (
    <Container
      direction={Direction.Column}
      className="min-h-screen min-w-screen dark:text-gray-100 text-gray-900  "
    >
      <Container className="w-full justify-start items-start  p-3  ">
        <div className="flex justify-center items-center gap-4 ">
          <ChangeTheme />
          <Link href="/" className="border p-1 px-2 font-bold rounded-md">
            HOME
          </Link>
        </div>
      </Container>

      <Container direction={Direction.Column} className="flex-1 w-full">
        <RegisterForm />
      </Container>
    </Container>
  );
}
