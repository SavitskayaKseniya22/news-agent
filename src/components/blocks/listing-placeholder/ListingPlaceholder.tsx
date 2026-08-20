export default function ListingPlaceholder({ length }: { length: number }) {
  return new Array(length).fill(0).map((j, i) => (
    <li className="flex h-full animate-pulse flex-col justify-center gap-4 border-2 p-2 text-center" key={i}>
      <div className="bg-palette-gray-light h-4 rounded-full" />

      <div className="flex grow items-center justify-between gap-4">
        <div className="bg-palette-gray-light h-2 w-16 grow rounded-full" />
        <div className="bg-palette-gray-light h-2 w-12 grow rounded-full" />
        <div className="bg-palette-gray-light h-2 w-12 grow rounded-full" />
      </div>
    </li>
  ));
}
