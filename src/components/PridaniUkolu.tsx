import { useState } from "react";

interface PridaniUkoluProps {
  onSubmit: (title: string) => void;
}

export default function PridaniUkolu({ onSubmit }: PridaniUkoluProps) {
  const [vstup, setVstup] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!vstup.trim()) return;

    onSubmit(vstup);
    setVstup("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={vstup}
        onChange={(e) => setVstup(e.target.value)}
        placeholder="Nový úkol"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-800 text-white hover:bg-slate-700"
      >
        Přidat
      </button>
    </form>
  );
}
