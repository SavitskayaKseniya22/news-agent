/* eslint-disable react/no-array-index-key */
export default function ListingPlaceholder({ length }: { length: number }) {
  return new Array(length).fill(0).map((j, i) => (
    <li className="flex h-full animate-pulse flex-col justify-center gap-4 border-2 p-2 text-center" key={i}>
      <div className="h-4 rounded-full bg-palette-gray-light" />

      <div className="flex flex-grow items-center justify-between gap-4">
        <div className="h-2 w-16 flex-grow rounded-full bg-palette-gray-light" />
        <div className="h-2 w-12 flex-grow rounded-full bg-palette-gray-light" />
        <div className="h-2 w-12 flex-grow rounded-full bg-palette-gray-light" />
      </div>
    </li>
  ));
}
