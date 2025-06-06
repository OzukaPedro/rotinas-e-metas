import AuthButton from "../AuthButton/page";
import AuthInput from "../AuthInput/page";

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
        <h1 className="font-bold text-2xl mb-3">Registro</h1>
        <AuthInput
          type="email"
          id="email"
          labelText="Email"
          placeholder="Email"
        />
        <AuthInput
          type="text"
          id="username"
          labelText="Nome de Usuário"
          placeholder="Nome de Usuário"
        />
        <AuthInput
          type="password"
          id="password"
          labelText="Senha"
          placeholder="Senha"
        />
        <AuthInput
          type="password"
          id="RePassword"
          labelText="Repetir Senha"
          placeholder="Repetir Senha"
        />

        <AuthButton
          className="
            mt-8
            text-gray-50 bg-blue-600 border-blue-700 font-bold
            dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800"
        >
          Enviar
        </AuthButton>
      </form>

      <div
        className="flex flex-col gap-2 w-[40%] p-8 border
        text-black rounded-r-xl border-[#bdbdbd] dark:border-[#5f5f5f]
        dark:text-white"
      >
        <p>Já tem uma conta?</p>
        <p>Clique aqui para acessar sua conta</p>
        <a
          href="/auth/login"
          className="w-full py-2 text-xs flex justify-center
                items-center border text-gray-50 bg-blue-600 border-blue-700
              dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800 font-bold rounded-md"
        >
          Entrar
        </a>
      </div>
    </Container>
  );
}
