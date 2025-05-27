"use client";
export default function PathIsNotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh] text-center px-4">
        <div className="text-[8rem]  flex items-center gap-4">
          <span>4</span>
          <span className="text-6xl">
            <span className="inline-block w-16 h-16 rounded-full border-8 border-black border-t-transparent animate-spin" />
          </span>
          <span>4</span>
        </div>
        <h2 className="text-2xl font-semibold mt-6">
          There's <span className="text-black">NOTHING</span> here...
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          ...maybe the page you’re looking for is not found or never existed.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition hover:cursor-pointer"
        >
          Back to home →
        </button>
      </div>
    </>
  );
}
