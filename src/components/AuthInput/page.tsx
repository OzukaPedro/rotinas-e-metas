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
      <label className="text-xs text-gray-800 dark:text-gray-100 ml-1">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        {...rest}
        className="border-b text-sm p-2 outline-none w-full
        text-gray-800 border-blue-600
        dark:text-gray-100 
        focus:ring-0 focus:border focus:rounded-md transition duration-150"
      />
    </Container>
  );
}
