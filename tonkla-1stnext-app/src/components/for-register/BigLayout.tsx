interface forpasswordRegister {
  children: React.ReactNode;
}
export default function BigLayout({ children }: forpasswordRegister) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
      <div className="p-6 mt-8 flex flex-col items-center w-[300px]">
        <h2 className="font-bold text-center mb-2 text-2xl">
          กรุณากรอกรหัสผ่าน
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          ตั้งรหัสผ่านเฉพาะตัวเลข 4 หลัก
        </p>
        {children}
      </div>
    </div>
  );
}
