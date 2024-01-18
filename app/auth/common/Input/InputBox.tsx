import React, { useState } from 'react'

interface InputProps {
    label: string;
    type: React.HTMLInputTypeAttribute,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string | number,
    placeholder?: string,
}

const InputBox = ({ label, type, onChange, value, placeholder }: InputProps) => {

    return (
        <div className="font-semibold space-y-3 py-4 w-full">
            <p className="text-sm">{label}</p>
            <input
                placeholder={placeholder ? placeholder : label}
                className="outline-none px-4 py-2 rounded-lg w-full border-2"
                value={value}
                onChange={onChange}
                type={type}
            />
        </div>
    )
}

export default InputBox