import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-[#FF7A00] text-white shadow-sm hover:bg-[#E86A00] focus-visible:outline-[#FF7A00]",
  ghost:
    "bg-white/70 text-[#111827] ring-1 ring-inset ring-black/10 hover:bg-white",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

export const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => (
  <button
    className={`${baseStyles} ${variants[variant]} ${className}`}
    {...props}
  />
);

export const ButtonLink = ({
  href,
  children,
  className = "",
  variant = "primary",
}: LinkButtonProps) => (
  <Link
    href={href}
    className={`${baseStyles} ${variants[variant]} ${className}`}
  >
    {children}
  </Link>
);
