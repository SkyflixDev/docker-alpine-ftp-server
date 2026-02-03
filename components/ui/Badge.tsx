import { type HTMLAttributes } from "react";

const variants = {
  solid: "bg-[#111827] text-white",
  soft: "bg-white/80 text-[#111827]",
  orange: "bg-[#FF7A00]/15 text-[#FF7A00]",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof variants;
};

export const Badge = ({
  variant = "soft",
  className = "",
  ...props
}: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
      variants[variant]
    } ${className}`}
    {...props}
  />
);
