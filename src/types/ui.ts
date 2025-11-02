import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseProps {
  variant?: "default" | "gradient" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps extends BaseProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ToastProps extends BaseProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export interface MenuProps extends BaseProps {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
}

export interface DialogProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export interface SelectProps extends BaseProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export interface RadioProps extends BaseProps {
  value: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}