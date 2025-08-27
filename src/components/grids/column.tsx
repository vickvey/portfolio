export function LayoutGridsColumn() {
  return (
    <div className="absolute inset-0 border-l-2 border-r-2 z-40">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-full ${i === 3 ? "" : "border-r-2"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
