import React, { useState } from "react";

interface TextBoxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string | number;
  placeholder?: string;
}

const TextBox = ({
  label,
  onChange,
  value,
  placeholder,
}: TextBoxProps) => {
  return (
    <div className="font-semibold space-y-3 py-4 w-full">
      <p className="text-sm">{label}</p>
      <textarea
        placeholder={placeholder ? placeholder : label}
        className="outline-none shadow-sm bg-white  h-24 px-4 py-2 rounded-lg w-full border-2 placeholder:font-normal text-black focus:border-primary-blue"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
