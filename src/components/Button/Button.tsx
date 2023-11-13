import clsx from "clsx";

const Button = ({
  children,
  disabled,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) => {
  return (
    <button
      className={clsx(
        "m-1 cursor-pointer rounded-md p-3 text-amber-400 transition-colors duration-500 hover:bg-slate-500",
        variant === "primary" && "bg-green-800",
        variant === "secondary" && "bg-indigo-700",
      )}
      disabled={disabled || onClick === undefined}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
