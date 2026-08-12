import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const svgWrapperVariants = cva(['inline-flex', '[&>svg]:h-full [&>svg]:w-full', '[&>svg_*]:transition-colors'], {
  variants: {
    view: {
      fill: '[&>svg_*]:fill-current',
      stroke: '[&>svg_*]:stroke-current',
      both: '[&>svg]:fill-current [&>svg]:stroke-current',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    view: 'both',
    size: 'md',
  },
});

type Props = React.ComponentProps<'span'> & VariantProps<typeof svgWrapperVariants>;

export default function SVGWrapper({ children, className, view, size, ...props }: Props) {
  return (
    <span className={clsx(svgWrapperVariants({ view, size }), className)} {...props}>
      {children}
    </span>
  );
}
