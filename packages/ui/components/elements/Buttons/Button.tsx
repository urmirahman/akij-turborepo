export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "danger";
  shape?: "rounded";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  shape,
  ...props
}) => {
  const classNames =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};