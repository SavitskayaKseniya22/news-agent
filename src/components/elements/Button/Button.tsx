import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const variants = cva(
  'font-title flex items-center justify-center whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-20 aria-disabled:cursor-not-allowed aria-disabled:opacity-20',
  {
    variants: {
      view: {
        primary: 'bg-palette-accent hover:bg-palette-accent-hover cursor-pointer text-white',
        secondary: 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700',
        transparent: 'text-palette-black-dark cursor-pointer bg-transparent hover:bg-blue-100',
      },
      size: {
        small: 'min-h-8 min-w-8 rounded-md px-4 text-sm',
        medium: 'min-h-10 min-w-10 rounded-lg px-4 text-base',
        big: 'min-h-12 min-w-12 rounded-xl px-8 text-lg font-bold',
      },
    },
    defaultVariants: {
      view: 'primary',
      size: 'medium',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof variants>;

export default function Button({ className, children, view, size, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} className={clsx(variants({ view, size }), className)}>
      {children}
    </button>
  );
}

type LinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomButtonLink({ className, children, view, size, disabled = false, onClick, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      className={clsx(variants({ view, size }), className)}
    >
      {children}
    </Link>
  );
}

type AnchorProps = React.ComponentProps<'a'> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomButtonAnchorLink({
  className,
  children,
  view,
  size,
  disabled = false,
  onClick,
  ...props
}: AnchorProps) {
  return (
    <a
      {...props}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      className={clsx(variants({ view, size }), className)}
    >
      {children}
    </a>
  );
}
