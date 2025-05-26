import LogoHeader from "@/components/LogoHeader";

const BackgroundLayout = ({ children }: any) => {
  return (
    <div className="relative h-screen w-full bg-[url('/background.png')] bg-cover bg-center flex flex-col justify-between">
      <LogoHeader />

      {children}
    </div>
  );
};

export default BackgroundLayout;
