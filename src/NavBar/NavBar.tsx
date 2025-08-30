export const NavBar = () => {
  const MenuItems = [
    { name: "About Us", path: "about" },
    { name: "Donate", path: "donate" },
    { name: "Images", path: "images" },
    { name: "Growing Season", path: "growing" },
  ];

  return (
    <div className="w-full shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Home</span>

        <button className="sm:hidden text-xl font-bold">☰</button>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 sm:mt-0">
        {MenuItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.path}`}
            className="text-lg font-semibold py-2 sm:py-0"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
