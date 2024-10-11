import { cn } from "@/utils/utils"
import { VariantProps,  cva } from "class-variance-authority"
import Link from "next/link"
import { ButtonHTMLAttributes ,forwardRef} from "react"

const buttonVariants = cva(
    'h-12 w-max px-6 py-2 inline-flex items-center justify-center rounded-[15px] font-powerGrotesk text-black-500',
    {
        variants: {
            variant: {
                default: 'bg-action text-black-500',
                outline: "border border-action text-white-500 hover:bg-black-500 hover:text-white-500",
                text: "border-none bg-transparent text-white-500 hover:text-action duration-150"
            },
            size: {
                default: 'text-md',
                lg: 'text-lg',
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> , VariantProps<typeof buttonVariants> {
    href?: string
    icon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({className,children, href ,icon, size,variant,...props},ref) => {
     if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
  return (
    <button ref={ref} className={cn(buttonVariants({variant,size,className}))} {...props} >
        {children}
        {icon}
    </button>
  )
})

Button.displayName = 'Button'

export { Button , buttonVariants };