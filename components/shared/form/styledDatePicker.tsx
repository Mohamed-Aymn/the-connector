/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface DatePickerProps<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

function StyledDatePicker<T extends Record<string, any>>({
  className,
  placeholder,
  ariaLabel,
  name,
  register,
}: DatePickerProps<T>) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          id={String(name)}
          type="date"
          aria-label={ariaLabel || String(name)}
          placeholder={placeholder}
          className={`${className || ""} p-2 w-full placeholder-grey-dark outline-none`}
          {...register(name)}
        />
      </div>
    </div>
  );
}

export default StyledDatePicker;
