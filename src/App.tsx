import Ukol from "./components/Ukol";
import { DummyData } from "./data/ukoly";

function App() {
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-4xl text-center">Úkolníček</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-5">
        <div className="space-y-2">
          {DummyData.map((ukol) => (
            <Ukol ukoly={ukol} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
