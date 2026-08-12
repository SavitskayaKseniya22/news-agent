import Button from '@/components/Button/Button';
import SVGWrapper from '@/components/SVGWrapper/SVGWrapper';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function RefetchButton({ onClick, istItDisabled }: { onClick: () => void; istItDisabled: boolean }) {
  return (
    <Button type="button" onClick={onClick} disabled={istItDisabled} view="secondary">
      <SVGWrapper view={'stroke'}>
        <ArrowPathIcon />
      </SVGWrapper>
    </Button>
  );
}
