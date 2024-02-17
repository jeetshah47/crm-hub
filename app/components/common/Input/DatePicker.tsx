import React from "react";
import InputBox from "./InputBox";

type DatePickerProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const DatePicker = ({
  label,
  onChange,
  value,
  placeholder,
}: DatePickerProps) => {
  return (
    <div>
      <InputBox
        type="date"
        onChange={onChange}
        value={value}
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DatePicker;
