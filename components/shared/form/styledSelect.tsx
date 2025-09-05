/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  options: Option[];
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
}

function StyledSelect<T extends Record<string, any>>({
  name,
  register,
  options,
  className,
  ariaLabel,
  placeholder,
}: SelectProps<T>) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <select
          id={String(name)}
          aria-label={ariaLabel || String(name)}
          className={`${className || ""} p-2 w-full placeholder-grey-dark outline-none`}
          {...register(name)}
          defaultValue=""
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StyledSelect;
