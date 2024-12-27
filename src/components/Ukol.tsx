import { Trash2 } from "lucide-react";
import { Ukoly } from "../types/ukoly";

interface UkolProps {
  ukoly: Ukoly;
  stavUkolu: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function Ukol({ ukoly, stavUkolu, onDelete }: UkolProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-100 grow">
        <input
          type="checkbox"
          checked={ukoly.completed}
          onChange={(e) => stavUkolu(ukoly.id, e.target.checked)}
          className="scale-150"
        />
        <span className={ukoly.completed ? "line-through text-gray-400" : ""}>
          {ukoly.title}
        </span>
      </label>
      <button onClick={() => onDelete(ukoly.id)} className="p-2">
        <Trash2 size={20} className="text-gray-600" />
      </button>
    </div>
  );
}
