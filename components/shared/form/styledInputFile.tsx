/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import Image from "next/image";
import { FileImage } from "lucide-react";

interface InputFileProps<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  ariaLabel?: string;
  className?: string;
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialImage?: string | FileList;
}

function StyledInputFile<T extends Record<string, any>>({
  name,
  register,
  ariaLabel,
  className,
  accept = "*/*",
  onChange,
  initialImage,
}: InputFileProps<T>) {
  const { onChange: rhfOnChange, onBlur, name: inputName, ref } = register(name);
  const [preview, setPreview] = useState<string | null>(() => {
    if (typeof initialImage === "string") {
      return initialImage;
    }
    if (initialImage instanceof FileList && initialImage.length > 0) {
      return URL.createObjectURL(initialImage[0]);
    }
    return null;
  });

  const [fileName, setFileName] = useState<string>(() => {
    if (typeof initialImage === "string") {
      return initialImage.split("/").pop() || "";
    }
    if (initialImage instanceof FileList && initialImage.length > 0) {
      return initialImage[0].name;
    }
    return "";
  });

  // cleanup blob URLs when component unmounts
  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className={`${className || ""} flex gap-2 relative w-full cursor-pointer`}
      onClick={() => document.getElementById(String(name))?.click()}
    >
      <div
        className="flex w-24 h-24 justify-center items-center cursor-pointer"
      >
        {preview ? (
          <Image
            src={preview}
            width={100}
            height={100}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="bg-neutral-300 p-4 rounded w-full h-full">
            <FileImage className="object-contain w-full h-full" />
          </div>
        )}
      </div>

      <div className="flex items-center text-sm w-full">
        <div className="">
          {fileName ? fileName : "No file chosen"}
        </div>
      </div>

      <input
        id={String(name)}
        type="file"
        name={inputName}
        ref={ref}
        onBlur={onBlur}
        aria-label={ariaLabel || String(name)}
        accept={accept}
        className="hidden"
        onChange={(e) => {
          rhfOnChange(e);
          const file = e.target.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            setFileName(file.name);
          }
          onChange?.(e);
        }}
      />
    </div>
  );
}

export default StyledInputFile;
