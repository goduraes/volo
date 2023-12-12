export default function Button(props: {
  children: string;
  secondary?: boolean;
  className?: string;
}) {
  const { children, secondary, className } = props;
  
  return (
    <button
      type="button"
      className={`${
        secondary
          ? "bg-primaria-4 hover:bg-semantica-1 text-semantica-1 hover:text-white"
          : "bg-semantica-2 hover:bg-semantica-1 text-white"
      } font-normal py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
