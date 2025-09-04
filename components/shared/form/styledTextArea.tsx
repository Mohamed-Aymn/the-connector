/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface TextareaProps<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  rows?: number;
}

function StyledTextarea<T extends Record<string, any>>({
  name,
  register,
  placeholder,
  ariaLabel,
  className,
  rows = 5,
}: TextareaProps<T>) {
  return (
    <div>
      <div className="relative w-full">
        <textarea
          id={String(name)}
          {...register(name)}
          placeholder={placeholder}
          aria-label={ariaLabel || String(name)}
          className={`${className || ""} p-2 w-full resize-none outline-none`}
          rows={rows}
        />
      </div>
    </div>
  );
}

export default StyledTextarea;
