import AuthButton from "../AuthButton/page";
import AuthInput from "../AuthInput/page";
import { Direction } from "../Container/enum";
import Container from "../Container/page";

export default function RegisterForm() {
  return (
    <Container
      className="w-[40%] min-h-[60%] flex items-stretch border rounded-xl
                 bg-gray-200 dark:bg-[#333333] dark:border-[#5f5f5f]
                 border-[#bdbdbd] shadow-md"
    >
      <form
        className="flex flex-col gap-2 p-8 border 
       text-black dark:border-[#5f5f5f] border-[#bdbdbd] rounded-l-xl
        dark:text-white w-[60%] h-full"
      >
        <h1 className="font-bold text-2xl mb-3">Login</h1>
        <AuthInput
          type="email"
          id="username"
          labelText="Email"
          placeholder="Email"
        />
        <AuthInput
          type="password"
          id="password"
          labelText="Senha"
          placeholder="Senha"
        />
        <div className="flex justify-end gap-1 mt-1 mr-1">
          <p className="text-xs dark:text-gray-300">Lembrar de mim</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="text-xs mt-3">
          <div
            className="flex gap-1
                text-blue-600 dark:text-blue-400"
          >
            <p className="ml-1 mb-1">Esqueceu a senha?</p>

            <a
              href=""
              className="hover:text-blue-700 dark:hover:text-blue-500 hover:underline "
            >
              clique aqui
            </a>
          </div>
          <AuthButton
            className="
              rounded-r-xl
            text-gray-50 bg-blue-600 border-blue-700 font-bold
            dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            Enviar
          </AuthButton>
        </div>
      </form>

      <div
        className="flex flex-col gap-2 w-[40%] p-8 border
        text-black rounded-r-xl border-[#bdbdbd] dark:border-[#5f5f5f]
        dark:text-white"
      >
        <p>Ainda não tem conta?</p>
        <p>Cadastre-se já para acessar a conta</p>
        <a
          href="/Auth/Register"
          className="w-full py-2 text-xs flex justify-center
                items-center border rounded-md text-gray-50 bg-blue-600 border-blue-700
              dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800"
        >
          Cadastre-se
        </a>
      </div>
    </Container>
  );
}
