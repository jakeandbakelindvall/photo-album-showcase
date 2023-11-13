import clsx from "clsx";
import TestTarget from "../../types/testTarget";

const Button = ({
  children,
  disabled,
  onClick,
  variant = "primary",
  dataTestId,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
} & TestTarget) => {
  return (
    <button
      className={clsx(
        "m-1 cursor-pointer rounded-md p-3 text-amber-400 transition-colors duration-500",
        variant === "primary" && "bg-green-800",
        variant === "secondary" && "bg-indigo-700",
        disabled && "cursor-not-allowed bg-slate-300 text-indigo-300",
        !disabled && "hover:bg-slate-500",
      )}
      disabled={disabled || onClick === undefined}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
