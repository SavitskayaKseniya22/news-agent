import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const variants = cva(
  [
    'text-inherit',
    'transition-colors duration-150',
    'cursor-pointer',
    'disabled:pointer-events-none disabled:opacity-20',
    'aria-disabled:pointer-events-none aria-disabled:opacity-20',
  ],
  {
    variants: {
      view: {
        primary: 'hover:text-palette-blue-dark',
        secondary: 'hover:text-palette-accent-hover',
      },
    },
    defaultVariants: {
      view: 'primary',
    },
  },
);

type ButtonProperties = React.ComponentProps<'button'> & VariantProps<typeof variants>;

export default function CustomLinkButton({ className, children, view, ...properties }: ButtonProperties) {
  return (
    <button type="button" {...properties} className={clsx(variants({ view }), className)}>
      {children}
    </button>
  );
}

type LinkProperties = React.ComponentProps<typeof Link> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomLink({ className, children, view, disabled = false, ...properties }: LinkProperties) {
  return (
    <Link
      {...properties}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : properties.tabIndex}
      className={clsx(variants({ view }), className)}
    >
      {children}
    </Link>
  );
}

type AnchorProperties = React.ComponentProps<'a'> &
  VariantProps<typeof variants> & {
    disabled?: boolean;
  };

export function CustomAnchorLink({ className, children, view, disabled = false, ...properties }: AnchorProperties) {
  return (
    <a
      {...properties}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : properties.tabIndex}
      className={clsx(variants({ view }), className)}
    >
      {children}
    </a>
  );
}
