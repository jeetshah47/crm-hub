import React, { useRef } from "react";
import InputBox from "./InputBox";

interface OtpBoxProps {
  label: string;
  onChange: (otp: string) => void;
  value: string;
  otpLength: number;
}

const OtpBox = ({ label, onChange, value, otpLength }: OtpBoxProps) => {
  const countBox = Array(otpLength)
    .fill(0)
    .map((x, i) => i + 1);

  const changeFocus = (value: string, index: number) => {
    if(value.length === 1) {
      document.getElementById(`box-${index+1}`)?.focus() 
    }
    else if(value.length === 0 ) {
      document.getElementById(`box-${index-1}`)?.focus()
    }
  }
    
  return (
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <div className="flex items-center space-x-4 py-4">
        {countBox.map((item) => (
          <input
            key={item}
            value={value[item]}
            id={`box-${item}`}
            maxLength={1}
            onChange={e => changeFocus(e.target.value, item)}
            className="outline-none w-14 text-center px-4 py-2 rounded-lg border-2 focus:border-primary-blue"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpBox;
