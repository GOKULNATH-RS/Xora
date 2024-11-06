import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef, InputHTMLAttributes } from 'react'

const InputVariants = cva('bg-transparent px-2 py-1 rounded-md', {
  variants: {
    variant: {
      default:
        'border-[1px] border-white-500/10 focus:border-white-500/70 placeholder:text-white-500'
    },
    size: {
      default: 'text-base',
      lg: 'text-2xl'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof InputVariants> {
  type: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, variant, size, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={cn(InputVariants({ variant, size, className }))}
      />
    )
  }
)

export { Input }
