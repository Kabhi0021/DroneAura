import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "rounded-full", // Always fully rounded!
    "py-3 px-8 text-base", // Consistent pill shape
  ].join(" "),
  {
    variants: {
      variant: {
        default: "[background:linear-gradient(90deg,#e4acec_0%,#ea56c7_35%,#ec6ad4_65%,#e4acec_100%)] text-white font-medium shadow-md hover:brightness-105 active:scale-95", // Pink glossy
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "[background:linear-gradient(90deg,#e4acec_0%,#ea56c7_35%,#ec6ad4_65%,#e4acec_100%)] text-white font-medium shadow-md hover:brightness-105 active:scale-105 ",
        cta: "bg-gradient-maroon text-white hover:bg-gradient-to-r hover:from-maroon hover:to-red-700 shadow-floating hover:shadow-deep hover:scale-105",
        glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 shadow-soft",
        clicked: 
          "[background:linear-gradient(90deg,#c6f7f7_0%,#8ee7fa_24%,#1992ff_60%,#0a2dce_100%)] text-white font-bold shadow-lg", // Blue gradient
        outline: 
          "bg-transparent border-2 border-[#ad44e6] text-[#ad44e6] font-bold hover:bg-[#f8f5fe]", // Outline purple
        outlineClicked: 
          "[background:linear-gradient(90deg,#c6f7f7_0%,#8ee7fa_24%,#1992ff_60%,#0a2dce_100%)] text-white font-bold border-0 shadow-lg", // Blue outline pressed  
      },
      size: {
                default: "", // pill by default
        sm: "py-2 px-5 text-sm",
        lg: "py-4 px-10 text-lg",
        xl: "h-14 rounded-lg px-10 text-base font-semibold",
        icon: "h-12 w-12 p-0", // if you ever use icon buttons
      },
    },  
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
