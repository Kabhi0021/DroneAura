import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-md",
    //"transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "rounded-full", // Always fully rounded!
    "py-3 px-8 text-base", // Consistent pill shape
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",
        clicked: "",
        //destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",
        //secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",
        //ghost: "hover:bg-accent hover:text-accent-foreground",
        //link: "text-primary underline-offset-4 hover:underline",
        hero: "[background:linear-gradient(90deg,#e32cea_2%,#f61dce_8%,#f35bbf_92%,#f16dac_98%)] text-white font-medium shadow-md hover:scale-100 active:scale-105 ", //Pink gradient
        cta: "[background:linear-gradient(90deg,#e32cea_2%,#f61dce_8%,#f35bbf_92%,#f16dac_98%)] text-white font-medium shadow-md hover:scale-100 active:scale-105", //Pink gradient
        glass: "bg-white/10 backdrop-blur-md text-white border border-white/50 hover:bg-white/20 shadow-soft",
        scroll: "bg-white text-[#3b30ff] rounded-full shadow-md hover:bg-[#e3e3e3] border-0 flex items-center justify-center",
        outline: "",
        outlineClicked: "",
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

// Utility to handle gradient border with active/clicked support
const useOutlineActive = () => {
  const [pressed, setPressed] = React.useState(false)
  return {
    pressed,
    eventProps: {
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseLeave: () => setPressed(false),
      onTouchStart: () => setPressed(true),
      onTouchEnd: () => setPressed(false),
    }
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Filled (default/hero/cta)
    if (["default", "hero", "cta"].includes(variant || "")) {
      const [pressed, setPressed] = React.useState(false)
      const isClicked = pressed
      const fillWrapperClass = isClicked
        ? "gradient-fill-blue"
        : "gradient-fill-pink"
      return (
        <span className={cn(fillWrapperClass, "w-full md:w-auto")} style={{ display: "inline-block" }}>
          <Comp
            ref={ref}
            className={cn("btn-fill-content w-full md:w-auto", className)}
            {...props}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
          >
            {children}
          </Comp>
        </span>
      )
    }

    // Outline and outlineClicked
    if (variant === "outline" || variant === "outlineClicked") {
      const [pressed, setPressed] = React.useState(false)
      const isClicked = variant === "outlineClicked" || pressed
      const outlineClass = isClicked
        ? "gradient-outline-clicked"
        : "gradient-outline"
      return (
        <span className={cn(outlineClass, "w-full md:w-auto")} style={{ display: "inline-block" }}>
          <Comp
            ref={ref}
            className={cn("btn-content w-full md:w-auto", className)}
            {...props}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
          >
            {children}
          </Comp>
        </span>
      )
    }

    // Fallback
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

