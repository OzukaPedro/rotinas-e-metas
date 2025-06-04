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
        className="border rounded-md text-sm p-2"
      />
    </Container>
  );
}
