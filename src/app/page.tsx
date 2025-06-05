import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";

export default function Home() {
  return (
    <>
      <Container
        direction={Direction.Column}
        className=" text-gray-900 min-h-screen min-w-full dark:text-gray-100
        "
      >
        <Header />
        <div className="flex-1 p-4 justify-center items-center flex">
          main page
        </div>
        <Footer />
      </Container>
    </>
  );
}
