interface ButtonType {
  ButtonText: string;
  onClick: any;

}

const handleSubmitForm = () => { };
export default function RedButton({ ButtonText, onClick }: ButtonType) {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <button
          onClick={onClick}
          className="w-[80%] h-[30%] hover:cursor-pointer bg-red-500 text-white font-bold text-[1.5rem] border-2 border-red-500 rounded-[18px] shadow-[4px_4px_8px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-red-200 hover:shadow-[6px_6px_10px_rgba(0,0,0,0.4)] active:scale-95 active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.3)]"
        >
          {ButtonText}
        </button>
      </div>
    </>
  );
}
