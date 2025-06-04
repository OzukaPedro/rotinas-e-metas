import AuthInput from "../AuthInput/page";

export default function LoginForm() {
  return (
    <form className=" flex flex-col gap-2  rounded-2xl p-8 border bg-[#383838]">
      <h1>Login</h1>
      <AuthInput
        type="text"
        id="username"
        labelText="Nome de usuario"
        placeholder="Nome"
      />
      <AuthInput
        type="password"
        id="password"
        labelText="Senha"
        placeholder="Senha"
      />
    </form>
  );
}
