import React from "react";

interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  placeholder?: string;
  name?: string
}

const SelectBox = ({
  label,
  onChange,
  value,
  placeholder,
  options: Options,
  name
}: InputProps) => {
  return (
    <div>
      <p className="text-sm py-2">{label}</p>
      <select
        onChange={onChange}
        name={name}
        className="outline-none shadow-sm bg-white  px-4 py-2 rounded-lg w-full border-2 placeholder:font-normal text-black focus:border-primary-blue"
      >
        {Options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
