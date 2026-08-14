export default function Spinner() {
  return (
    <div
      className={`bg-palette-blue-dark flex h-18 w-16 rotate-45 animate-spin items-center justify-center rounded-full`}
    >
      <div className={`h-16 w-16 -rotate-45 overflow-hidden rounded-full bg-white`} />
    </div>
  );
}
