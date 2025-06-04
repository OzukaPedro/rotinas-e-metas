import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";
import ChangeTheme from "@/components/Header/ChangeTheme/page";
import LoginForm from "@/components/LoginForm/page";

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
        <ChangeTheme />
      </Container>
      <Container className="flex-1">
        <LoginForm />
      </Container>
    </Container>
  );
}
