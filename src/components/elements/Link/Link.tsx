import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const variants = cva(
  [
    'text-inherit',
    'transition-colors duration-150',
    'disabled:cursor-default disabled:opacity-20',
    'aria-disabled:cursor-default aria-disabled:opacity-20',
    'aria-disabled:pointer-events-none',
    'cursor-pointer',
  ],
  {
    variants: {
      view: {
        primary: 'enabled:hover:text-palette-blue-dark',
        secondary: 'enabled:hover:text-palette-accent-hover',
      },
    },
    defaultVariants: {
      view: 'primary',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof variants>;

export default function CustomLinkButton({ className, children, view, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} className={clsx(variants({ view }), className)}>
      {children}
    </button>
  );
}

type LinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomLink({ className, children, view, disabled = false, onClick, ...props }: LinkProps) {
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
      className={clsx(variants({ view }), className)}
    >
      {children}
    </Link>
  );
}

type AnchorProps = React.ComponentProps<'a'> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomAnchorLink({ className, children, view, disabled = false, onClick, ...props }: AnchorProps) {
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
      className={clsx(variants({ view }), className)}
    >
      {children}
    </a>
  );
}
