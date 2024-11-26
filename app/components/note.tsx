"use client";

export default function Note() {
  return (
    <div className="rounded-lg border border-gray-300 min-h-20 bg-blue-100">
      <div
        className="
          overflow-hidden 
          rounded-lg
          border
          shadow-sm
          focus-within:border-indigo-500
          focus-within:ring-1
          focus-within:ring-indigo-500
          focus-within:absolute
          focus-within:w-[80vw]
          focus-within:h-[70vh]
          focus-within:z-10
          focus-within:top-1/2
          focus-within:left-1/2 
          focus-within:transform 
          focus-within:-translate-x-1/2 
          focus-within:-translate-y-1/2
        "
      >
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="block w-full border-0 pt-2.5 text-lg font-medium text-black placeholder:text-gray-400 focus:ring-0"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Write a description..."
          className="block w-full h-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
