export default function CommentPlaceholder() {
  return (
    <li className="comment container flex animate-pulse flex-col gap-2 rounded-lg border p-2">
      <div className="flex justify-between gap-4">
        <div className="bg-palette-gray-light h-4 w-20 rounded-full" />
        <div className="bg-palette-gray-light h-4 w-48 rounded-full" />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="bg-palette-gray-light h-2 grow rounded-full" />
        <div className="bg-palette-gray-light h-2 grow rounded-full" />
        <div className="bg-palette-gray-light h-2 grow rounded-full" />
      </div>

      <div className="bg-palette-gray-light h-3 w-16 grow self-end rounded-full" />
    </li>
  );
}
