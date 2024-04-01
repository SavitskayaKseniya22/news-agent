/* eslint-disable react/require-default-props */
import { MouseEventHandler } from 'react';

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-palette-orange min-h-10 rounded-lg px-6 py-2 text-base font-bold tracking-wider text-white"
    >
      {children}
    </button>
  );
}
