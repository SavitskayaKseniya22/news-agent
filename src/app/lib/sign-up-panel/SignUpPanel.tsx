import Button from '@/shared/ui/Button/Button';

export default function SignUpPanel() {
  return (
    <div
      className="bg-palette-blue-dark container flex flex-col items-center gap-8 p-4 text-white sm:p-8 lg:p-12"
      id="subscription"
    >
      <h1 className="text-h1">Sign Up for Our Newsletters</h1>
      <p className="text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod.
      </p>

      <div className="flex flex-wrap gap-4 self-stretch">
        <input
          type="text"
          placeholder="Input your email address here"
          className="text-h6-semibold min-h-10 grow rounded-lg px-6 py-2 font-bold tracking-wider"
        />

        <Button type="button" view="primary">
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}
