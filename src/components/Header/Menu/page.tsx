import Container from "@/components/Container/page";
import DropdownMenu from "../DropdownMenu/page";

export default function Menu() {
  return (
    <>
      <Container className="gap-10 ">
        <DropdownMenu
          title="Rotinas"
          items={[{ label: "opção 01", href: "/" }]}
        />
        <DropdownMenu
          title="Metas"
          items={[{ label: "opção 01", href: "/" }]}
        />
      </Container>
    </>
  );
}
