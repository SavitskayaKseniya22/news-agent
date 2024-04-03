export default function SignUpPanel() {
  return (
    <div
      className="flex w-320 flex-col items-center gap-8 bg-palette-blue-dark p-16 text-white"
      id="subscription"
    >
      <h1 className="text-h1">Sign Up for Our Newsletters</h1>
      <p className="text-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>

      <div className="flex gap-4 self-stretch">
        <input
          type="text"
          placeholder="Input your email address here"
          className="min-h-10 flex-grow rounded-lg px-6 py-2 text-h6-semibold font-bold tracking-wider"
        />

        <button type="button" className="btn btn_orange">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
