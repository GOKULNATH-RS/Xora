import { cn } from '@/utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'

const gradientVariants = cva(
  'bg-gradient-to-b from-accent to-[#759204] absolute rounded-full ',
  {
    variants: {
      variant: {
        default: 'opacity-100',
        subtle: 'opacity-50'
      },
      size: {
        default: 'h-[335px] w-[335px]'
      }
    }
  }
)

interface GradientProps extends VariantProps<typeof gradientVariants> {
  className?: string
}

const Gradient: FC<GradientProps> = ({ variant, size, className }) => {
  return <div className={cn(gradientVariants({ variant, size, className }))} />
}

export { Gradient }
