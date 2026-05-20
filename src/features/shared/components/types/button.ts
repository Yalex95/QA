export type ButtonVariant = "primary" | "secondary" | "badge";

export type ButtonProps = {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};
