import TestTarget from "../../types/testTarget";

const Input = ({
  placeholder,
  value,
  setValue,
  dataTestId,
}: {
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
} & TestTarget) => {
  return (
    <input
      className="m-1 rounded-sm bg-slate-300 p-3 text-blue-900"
      onChange={(e) => setValue && setValue(e.target.value ?? "")}
      placeholder={placeholder}
      value={value}
      data-testid={dataTestId}
    />
  );
};

export default Input;
