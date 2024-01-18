import React from 'react'

interface InputProps {
    label: string;
    type: React.HTMLInputTypeAttribute,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string | number,
    placeholder?: string,
}

const SelectBox = () => {
  return (
    <div>SelectBox</div>
  )
}

export default SelectBox