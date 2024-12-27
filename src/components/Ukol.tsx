import { Ukoly } from "../types/ukoly";

interface UkolProps {
  ukoly: Ukoly;
}

export default function Ukol({ ukoly }: UkolProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-100">
        <input type="checkbox" className="scale-150" />
        <span className={ukoly.completed ? "line-through text-gray-400" : ""}>
          {ukoly.title}
        </span>
      </label>
    </div>
  );
}
