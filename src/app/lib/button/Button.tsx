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
    <button type="button" onClick={onClick} className="btn">
      {children}
    </button>
  );
}
