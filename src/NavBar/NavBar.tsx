export const NavBar = () => {
  const MenuItems = [
    { name: "About Us", path: "about" },
    { name: "Donate", path: "donate" },
    { name: "Images", path: "images" },
    { name: "Growing Season", path: "growing" },
  ];

  return (
    <div className="w-full flex items-center justify-between shadow-md  p-4">
      <div className="flex items-center pt-1">
        <span className="text-lg font-semibold ">Home</span>
      </div>

      <div className="flex items-center space-x-8">
        {MenuItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.path}`}
            className="text-lg font-semibold"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
