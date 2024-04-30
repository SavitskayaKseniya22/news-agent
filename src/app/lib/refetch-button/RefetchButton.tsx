/* eslint-disable jsx-a11y/control-has-associated-label */

import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function RefetchButton({
  onClick,
  istItDisabled,
}: {
  onClick: () => void;
  istItDisabled: boolean;
}) {
  return (
    <button
      type="button"
      className="btn btn_orange"
      onClick={onClick}
      disabled={istItDisabled}
    >
      <ArrowPathIcon />
    </button>
  );
}
