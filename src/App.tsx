import { useState } from "react";
import { DummyData } from "./data/ukoly";
import PridaniUkolu from "./components/PridaniUkolu";
import UkolList from "./components/UkolList";
import UkolyHromadne from "./components/UkolyHromadne";

function App() {
  const [zmenaUkolu, setZmenaUkolu] = useState(DummyData);

  function setStavUkolu(id: number, completed: boolean) {
    setZmenaUkolu((prevZmenaUkolu) =>
      prevZmenaUkolu.map((ukoly) =>
        ukoly.id === id ? { ...ukoly, completed } : ukoly
      )
    );
  }

  function pridaniUkolu(title: string) {
    setZmenaUkolu((prevZmenaUkolu) => [
      {
        id: prevZmenaUkolu.length + 1,
        title,
        completed: false,
      },
      ...prevZmenaUkolu,
    ]);
  }

  function deleteUkol(id: number) {
    setZmenaUkolu((prevZmenaUkolu) =>
      prevZmenaUkolu.filter((ukoly) => ukoly.id !== id)
    );
  }

  function deleteVsechnyHotove() {
    setZmenaUkolu((prevZmenaUkolu) =>
      prevZmenaUkolu.filter((ukoly) => !ukoly.completed)
    );
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-4xl text-center">Úkolníček</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-5 space-y-6">
        <PridaniUkolu onSubmit={pridaniUkolu} />
        <UkolList
          ukoly={zmenaUkolu}
          stavUkolu={setStavUkolu}
          onDelete={deleteUkol}
        />
      </div>
      <UkolyHromadne
        ukoly={zmenaUkolu}
        deleteVsechnyHotove={deleteVsechnyHotove}
      />
    </main>
  );
}

export default App;
