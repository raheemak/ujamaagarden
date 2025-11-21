export const Donate = () => {
  return (
    <button
      onClick={() =>
        window.open("https://www.buymeacoffee.com/freebird", "_blank")
      }
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
    >
      Support Me
    </button>
  );
};
