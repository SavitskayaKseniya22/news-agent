export default function CommentPlaceholder() {
  return (
    <li className="comment container flex animate-pulse flex-col gap-6 rounded-lg border-2 p-4">
      <div className="flex justify-between gap-4">
        <div className="h-4 w-20 rounded-full bg-palette-gray-light" />
        <div className="h-4 w-48 rounded-full bg-palette-gray-light" />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="h-2 grow rounded-full bg-palette-gray-light" />
        <div className="h-2 grow rounded-full bg-palette-gray-light" />
        <div className="h-2 grow rounded-full bg-palette-gray-light" />
      </div>

      <div className="h-3 w-16 grow self-end rounded-full bg-palette-gray-light" />
    </li>
  );
}
