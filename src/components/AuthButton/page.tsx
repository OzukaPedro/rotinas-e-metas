type AuthButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ComponentProps<"button">;

export default function AuthButton({
  children,
  className,
  ...rest
}: AuthButtonProps) {
  return (
    <button
      className={`${className} w-full py-2 text-xs flex justify-center
      items-center border rounded-md `}
      {...rest}
    >
      {children}
    </button>
  );
}
