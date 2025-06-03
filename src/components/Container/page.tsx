import { Direction } from "./enum";

type ContainerProps = {
  direction?: Direction;
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  direction = Direction.Row,
  children,
  className = "",
}: ContainerProps) {
  const baseClass = "flex justify-center items-center text-center";
  const directionClass = direction === Direction.Column ? "flex-col" : "";

  return (
    <div className={`${baseClass} ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
