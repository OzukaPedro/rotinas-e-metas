import Container from "@/components/Container/page";

export default function UserIcon() {
  return (
    <Container className="gap-2">
      <a href="/auth/login">Entrar</a>
      <a href="/auth/register">Registrar</a>
    </Container>
  );
}
