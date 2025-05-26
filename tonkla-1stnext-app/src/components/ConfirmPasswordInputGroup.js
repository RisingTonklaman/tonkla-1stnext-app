"use client";

export default function ConfirmPasswordInputGroup({ password, confirmPassword, onPasswordChange, onConfirmChange }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="password"
        placeholder="รหัสผ่านใหม่"
        className="w-[350px] h-12 px-4 rounded-[20px] bg-gray-200 border-2 border-cyan-400 outline-none text-base placeholder:text-gray-500 shadow"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <input
        type="password"
        placeholder="ยืนยันรหัสผ่าน"
        className="w-[350px] h-12 px-4 rounded-[20px] bg-gray-200 border-2 border-cyan-400 outline-none text-base placeholder:text-gray-500 shadow"
        value={confirmPassword}
        onChange={(e) => onConfirmChange(e.target.value)}
      />
    </div>
  );
}
