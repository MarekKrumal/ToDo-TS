import { Ukoly } from "../types/ukoly";
import Ukol from "./Ukol";

interface UkolyProps {
  ukoly: Ukoly[];
  stavUkolu: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
export default function UkolList({ ukoly, stavUkolu, onDelete }: UkolyProps) {
  const ukolyPoskladame = ukoly.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {ukolyPoskladame.map((ukol) => (
          <Ukol
            key={ukol.id}
            stavUkolu={stavUkolu}
            ukoly={ukol}
            onDelete={onDelete}
          />
        ))}
      </div>
      {ukoly.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          Žádné úkoly. Hurá hrát si ven!
        </p>
      )}
    </>
  );
}
