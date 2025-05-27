interface BiglayoutProps {
  phone: any;
  children1: React.ReactNode;
  children2: React.ReactNode;
}

export default function Biglayout({
  phone,
  children1,
  children2,
}: BiglayoutProps) {
  return (
    <>
      <form className="text-center px-6 mt-[50vh]">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          กรุณากรอกรหัสผ่าน {phone}
        </h2>
        <p
          className="text-base text-blue-800 mb-6 drop-shadow-sm"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
        >
          ตั้งรหัสผ่านเฉพาะตัวเลข 4 หลัก
        </p>

        {children1}
        <div className="mt-[10%] w-[350px] h-[10%] mx-auto mb-[33%]">
          {children2}
        </div>
      </form>
    </>
  );
}
