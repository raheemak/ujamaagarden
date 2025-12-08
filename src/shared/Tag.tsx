import classNames from "classnames";

type TagProps = {
  text: string;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
  className?: string;
};

export const Tag = ({ text, color = "blue", className }: TagProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
  };

  return (
    <span
      className={classNames(
        "inline-block px-2 py-0.5 text-lg font-medium rounded-full",
        colorClasses[color],
        className,
      )}
    >
      {text}
    </span>
  );
};
