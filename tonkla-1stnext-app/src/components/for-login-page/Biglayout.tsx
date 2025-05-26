interface BiglayoutProps {
  children1: React.ReactNode;
  children2: React.ReactNode;
}

export default function Biglayout({ children1, children2 }: BiglayoutProps) {
  return (
    <form className="h-full flex flex-col justify-end">
      <div className="text-center px-6 mb-[14vh]">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          กรอกหมายเลขโทรศัพท์ของคุณ
        </h2>
        <p
          className="text-base text-blue-800 mb-6 drop-shadow-sm"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          เพื่อเข้าสู่หน้าตั้งรหัสผ่าน
        </p>
        {children1}
        <div className="flex justify-center p-40">{children2}</div>
      </div>
    </form>
  );
}
