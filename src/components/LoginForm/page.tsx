import AuthButton from "../AuthButton/page";
import AuthInput from "../AuthInput/page";

export default function LoginForm() {
  return (
    <form
      className=" flex flex-col gap-2  rounded-2xl p-8 border shadow-md
     bg-gray-300 dark:bg-[#333333] text-black dark:text-white
      border-[#bdbdbd] dark:border-[#5f5f5f]"
    >
      <h1 className="font-bold">Login</h1>
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
      <div className="text-xs mt-3">
        <div className="text-blue-600 dark:text-blue-400 flex gap-1">
          <p className="ml-1">Esqueceu a senha?</p>
          <a href="">clique aqui</a>
        </div>
        <AuthButton className="text-gray-50 bg-blue-600 dark:bg-blue-600">
          Enviar
        </AuthButton>
      </div>
    </form>
  );
}
