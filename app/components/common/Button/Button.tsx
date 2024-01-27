type ButtonProps = {
  text: string;
  size?: "sm" | "md" | "lg"
};

const Button = ({text, size}:ButtonProps) => {
  return (
    <button className="flex items-center gap-2 bg-blue-500 rounded-lg px-8 py-2 text-white shadow-lg shadow-blue-500/50 hover:shadow-sm duration-300">
      <p className={`text-${size ?? 'md'}`}>{text}</p>
    </button>
  );
};

export default Button;
