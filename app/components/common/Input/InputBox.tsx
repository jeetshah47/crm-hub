import React, { useState } from "react";

interface InputProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  name?: string;
}

const InputBox = ({
  label,
  type,
  onChange,
  value,
  placeholder,
  name
}: InputProps) => {
  
  return (
    <div className="font-semibold space-y-3 py-4 w-full">
      <p className="text-sm">{label}</p>
      <input
        placeholder={placeholder ? placeholder : label}
        className="outline-none shadow-sm  px-4 py-2 bg-white rounded-lg w-full border-2 placeholder:font-normal text-black focus:border-primary-blue"
        value={value}
        onChange={onChange}
        type={type}
        name={name}
      />
    </div>
  );
};

export default InputBox;
