/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: "text" | "email" | "password" | "number"; // more flexibility
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

function StyledInput<T extends Record<string, any>>({
  type = "text",
  className,
  placeholder,
  ariaLabel,
  name,
  register,
}: InputProps<T>) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          id={String(name)}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel || String(name)}
          className={`${className || ""} p-2 w-full placeholder-grey-dark outline-none`}
          {...register(name)}
        />
      </div>
    </div>
  );
}

export default StyledInput;
