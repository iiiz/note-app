import Note from "./components/note";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 pb-20 gap-5 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Note />
      <Note />
      <Note />

      <button
        type="button"
        className="absolute bottom-10 right-10 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
