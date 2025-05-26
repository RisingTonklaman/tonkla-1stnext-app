"use client";
import Button from '@mui/material/Button'; // ✅ ✅ ✅


export default function NextButton({ onClick, label = "ถัดไป", className = "" }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // ทำให้ปุ่มอยู่ตรงกลางซ้าย-ขวา
        padding: 40,
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          width: '350px',
          height: '54px',
          border: '2px solid #ef4444',
          backgroundColor: '#ef4444',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          borderRadius: '18px',
          boxShadow: '4px 4px 8px rgba(0,0,0,0.3)',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#fecaca',
            boxShadow: '6px 6px 10px rgba(0,0,0,0.4)',
          },
          '&:active': {
            transform: 'scale(0.95)',
            boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.3)',
          },
        }}
      >
        {label}
      </Button>
    </div>
  );
}


/*
    <div className="min-h-screen flex justify-center items-center bg-red-600">
      <NextButton label="ลอง Hover ดูสิ" onClick={() => alert("Click!")} />
        
    </div>  */

  export function TestPage({ onClick, label = "ถัดไป", className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`
          mt-5 w-[350px] h-12 border-2 border-red-500 bg-red-500 
          hover:bg-red-100 hover:shadow-lg 
          active:scale-95 active:shadow-inner
          text-white font-bold rounded-[18px] 
          shadow-[4px_4px_8px_rgba(0,0,0,0.3)] transition-all duration-300 
          text-2xl ${className}
        `}
      >
        {label}
      </button>
      
    );
  }