import Container from "@/components/Container/page";

export default function UserIcon() {
  return (
    <Container className="gap-2">
      <a href="/Auth/Login">Entrar</a>
      <a href="/Auth/Register">Registrar</a>
    </Container>
  );
}
