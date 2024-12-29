import { Ukoly } from "../types/ukoly";

interface UkolyHromadneProps {
  ukoly: Ukoly[];
  deleteVsechnyHotove: () => void;
}

export default function UkolyHromadne({
  ukoly,
  deleteVsechnyHotove,
}: UkolyHromadneProps) {
  const vsechynHotove = ukoly.filter((ukol) => ukol.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {vsechynHotove.length}/{ukoly.length} Ukoly Hotove
      </p>
      {vsechynHotove.length > 0 && (
        <button
          onClick={deleteVsechnyHotove}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
