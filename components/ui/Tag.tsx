import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const TagVariants = cva(
  'inline-flex items-center gap-[2px] rounded-full bg-black-500 px-1 mx-1',
  {
    variants: {
      variant: {
        default:
          'm-[2px] bg-black-600/60 backdrop-blur-md text-white-500 border-[1px] border-black-600/60  active:border-tertiary'
      },
      size: {
        default: 'text-xs h-[23px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

interface TagProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof TagVariants> {}

const Tag = forwardRef<HTMLButtonElement, TagProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(TagVariants({ variant, size, className }))}
      >
        {children}
      </button>
    )
  }
)

export { Tag }
