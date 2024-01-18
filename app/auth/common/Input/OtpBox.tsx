import React from "react";
import InputBox from "./InputBox";

interface OtpBoxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  otpLength: number;
}

const OtpBox = ({ label, onChange, value, otpLength }: OtpBoxProps) => {
  const countBox = Array(5)
    .fill(0)
    .map((x, i) => i + 1);
  return (
    <div>
      <p className="text-sm">{label}</p>
      {countBox.map((item) => (
        <input key={item} value={value[item]} className="outline-none px-4 py-2 rounded-lg w-full border-2" />
      ))}
    </div>
  );
};

export default OtpBox;
