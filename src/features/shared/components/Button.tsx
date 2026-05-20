import type {
  ButtonProps,
  ButtonVariant,
} from "@/features/shared/components/types/button";

const baseStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-primary)] text-white border-1",
  secondary: "bg-white border-1 text-[var(--color-primary)]",
  badge: "bg-white border-1 text-[var(--color-secondary)]",
};

export default function Button({
  variant,
  children,
  onClick,
  href,
  target,
  disabled,
  className = "",
  icon,
  type = "button",
}: ButtonProps) {
  const styles = `${baseStyles[variant]} ${className} text-base capitalized rounded-md px-8 py-4 font-semibold inline-flex items-center w-full md:w-fit justify-center`;

  if (href) {
    return (
      <a href={href} target={target} className={styles}>
        {icon && <span className="mr-2 ">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
