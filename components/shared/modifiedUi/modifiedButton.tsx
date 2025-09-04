"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
interface ModifiedButtonPops {
  text: string;
  href: string;
  className?: string;
  buttonClassName?: string;
  fill?: boolean;
  size: "sm" | "md";
  width?: "fit" | "full";
  color?: "primary" | "secondary";
}
const ModifiedButton = ({
  text,
  href,
  className,
  fill = true,
  buttonClassName,
  size = "md",
  width = "fit",
  ...props
}: ModifiedButtonPops) => {
  return (
    <Link
      href={href}
      className={`${className} ${width === "fit" ? "w-fit" : "w-full"}`}
    >
      <Button
        className={`${buttonClassName}
            ${fill
            ? "!bg-secondary !text-primary"
            : "!bg-background !text-secondary border border-secondary"
          }
         w-fit !h-[48px] !rounded-none
        ${width === "fit" ? "w-fit" : "w-full"}
        py-2 px-6 uppercase cursor-pointer`}
        size={size === "sm" ? "sm" : "lg"}
        {...props}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ModifiedButton;
