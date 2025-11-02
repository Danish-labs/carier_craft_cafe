import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA21F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 motion-safe:transform-gpu will-change-transform transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFA21F] text-[#12122B] hover:bg-gradient-to-r from-[#FFA21F] to-[#840D0D] hover:text-[#FFFAE5] hover:-translate-y-1 active:scale-95",
        gradient:
          "bg-gradient-to-r from-[#FFA21F] to-[#840D0D] text-[#FFFAE5] hover:shadow-[0_0_20px_rgba(255,162,31,0.5)] hover:-translate-y-1 active:scale-95",
        outline: 
          "border-2 border-[#FFA21F] text-[#FFA21F] hover:bg-[#FFA21F] hover:text-[#12122B] hover:-translate-y-1 active:scale-95",
        secondary: 
          "bg-[#12122B] text-[#FFFAE5] hover:bg-[#1a1a3d] hover:-translate-y-1 active:scale-95",
        ghost: 
          "text-[#FFFAE5] hover:bg-[#FFA21F]/10 hover:-translate-y-1 active:scale-95",
        link: 
          "text-[#FFA21F] underline-offset-4 hover:underline hover:-translate-y-1 active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

import type { ButtonProps } from "@/types/ui"

export interface ExtendedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
