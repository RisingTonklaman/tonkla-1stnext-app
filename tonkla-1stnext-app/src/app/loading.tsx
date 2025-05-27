import { MdDownloading } from "react-icons/md";
export default function loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black  opacity-5 z-10"></div>
      <div className="fixed inset-8 z-50">
        <div className="flex items-center justify-center min-h-full text-white text-4xl">
          <MdDownloading className="text-9xl animate-spin text-blue-800" />
        </div>
      </div>
    </>
  );
}
