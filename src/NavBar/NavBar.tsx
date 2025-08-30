import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItems = [
    { name: "About Us", path: "about" },
    { name: "Donate", path: "donate" },
    { name: "Images", path: "images" },
    { name: "Growing Season", path: "growing" },
  ];

  return (
    <div className="w-full shadow-md p-4 flex items-center justify-between relative">
      <span className="text-lg font-semibold">Home</span>

      <button
        className="sm:hidden text-2xl font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-50
                    ${isOpen ? "translate-x-0" : "translate-x-full"} 
                    bg-white sm:bg-transparent sm:translate-x-0 sm:static sm:flex sm:flex-row sm:space-x-8 sm:h-auto sm:w-auto sm:shadow-none`}
      >
        <div className="flex flex-col mt-20 sm:mt-0 sm:flex-row sm:space-x-8">
          {MenuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.path}`}
              className="text-lg font-semibold py-2 px-4 sm:py-0 sm:px-0 border-b sm:border-none border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};
