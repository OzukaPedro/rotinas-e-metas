import { Direction } from "@/components/Container/enum";
import Container from "@/components/Container/page";

type LoginInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export default function AuthInput({
  id,
  type,
  labelText,
  ...rest
}: LoginInputProps) {
  return (
    <Container direction={Direction.Column} className="gap-1 items-start">
      <label className="text-xs ml-1">{labelText}</label>
      <input
        type={type}
        id={id}
        {...rest}
        className="border-b text-sm p-2 outline-none w-full
        border-b-blue-600 border-transparent border
        text-gray-900 dark:text-gray-100 focus:border-blue-600
        dark:focus:border-blue-400 dark:border-b-blue-400
        placeholder:text-gray-500 dark:placeholder:text-gray-300
         focus:border focus:rounded-md transition duration-150"
      />
    </Container>
  );
}
