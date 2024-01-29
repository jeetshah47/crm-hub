'use client'

import Button from "../Button/Button";

interface SectionHead {
  title: string,
  buttonPress: (params?: any) => void;
  buttonText: string,
  filter?: boolean,
  filterComponent?: React.ReactNode
}

const SectionHead = ({title, buttonPress, buttonText, filter, filterComponent}: SectionHead) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-shallow-black text-4xl font-bold ">{title}</p>
      </div>
      {/* Add Fitler */}
      <div></div>
      <div>
        <Button text={buttonText} onClick={buttonPress} />
      </div>
    </div>
  );
};

export default SectionHead;
