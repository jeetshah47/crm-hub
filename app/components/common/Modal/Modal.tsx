import Button from "../Button/Button";

export type ModalProps = {
  display: boolean;
  title: string;
  buttonAction: (params: any) => void;
  buttonText: string;
  children: React.ReactNode;
};

const Modal = ({
  display,
  title,
  buttonAction,
  buttonText,
  children,
}: ModalProps) => {
  return (
    <div
      className={`${display ? "flex" : "hidden"} h-full w-full bg-modal bg-opacity-15  fixed top-0 left-0 items-center justify-center`}
    >
      <div className="p-14 bg-white rounded-3xl">
        <div>
        <p>{title}</p>

        </div>
        <div className="py-2">{children}</div>
        <Button onClick={buttonAction} text={buttonText} />
      </div>
    </div>
  );
};

export default Modal;
