import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'flex cursor-pointer items-center justify-center py-2 whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-20',
  {
    variants: {
      view: {
        primary: 'bg-palette-accent text-white hover:bg-gray-300',
        secondary: 'bg-blue-600 text-white hover:bg-blue-700',
        transparent: 'bg-transparent text-black hover:bg-blue-100',
      },
      size: {
        small: 'min-h-8 min-w-8 rounded-md px-2',
        medium: 'min-h-10 min-w-10 rounded-lg px-4 text-base',
        big: 'min-h-12 min-w-12 rounded-xl px-6 font-bold',
      },
    },
    defaultVariants: {
      view: 'primary',
      size: 'medium',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export default function Button({ className, children, view, size, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} className={clsx(buttonVariants({ view, size }), className)}>
      {children}
    </button>
  );
}
