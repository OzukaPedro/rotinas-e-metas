import AuthButton from "../AuthButton/page";
import AuthInput from "../AuthInput/page";

export default function LoginForm() {
  return (
    <form
      className=" flex flex-col gap-2  rounded-2xl p-8 border shadow-md
     bg-gray-300  text-black  border-[#bdbdbd]
      dark:bg-[#333333] dark:border-[#5f5f5f] dark:text-white"
    >
      <h1 className="font-bold text-2xl mb-3">Login</h1>
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
        <div
          className="flex gap-1
        text-blue-600 dark:text-blue-400 
           
        "
        >
          <p className="ml-1">Esqueceu a senha?</p>
          <a href="" className="hover:text-blue-700 dark:hover:text-blue-500  ">
            clique aqui
          </a>
        </div>
        <AuthButton
          className="
        text-gray-50 bg-blue-600 border-blue-700
        dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800"
        >
          Enviar
        </AuthButton>
      </div>
    </form>
  );
}
