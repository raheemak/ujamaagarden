const DESCRIPTION_ITEMS = [
  "youth-centered experimental learning space",
  "resting ground",
  "community garden",
  "located in Northeast Bronx",
];

export const TitleText = () => {
  return (
    <div className="w-full flex-1 relative flex overflow-visible flex-col items-center justify-center bg-[url('/ujamaa-bg.png')] bg-cover bg-center">
      <div className="absolute inset-10 top-50 left-0 right-0  bg-[#8b9b3c] opacity-20 blur-2xl z-0 [clip-path:polygon(10%_85%,90%_45%,95%_60%,50%_80%,5%_60%)]"></div>

      <h1
        className="pt-[130px] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[280px] font-cursive font-extrabold text-transparent 
             bg-clip-text bg-cover bg-center [-webkit-text-stroke:2px_#000] leading-none 
             bg-[url('/trees-3.jpg')]"
      >
        UJAMAA
      </h1>

      <h2 className="-mt-4 text-5xl sm:text-5xl md:text-6xl text-[#395339] text-center sm:text-left">
        community garden.
      </h2>

      <br />

      {/* <span className="text-xl sm:text-xl w-1/2 text-center text-black z-10 px-4">
        youth-centered and experimental learning space, resting ground, and
        community garden located in the Northeast Bronx
      </span> */}
      <span className="text-xl sm:text-xl w-2/3 text-center text-black z-10 px-4">
        {DESCRIPTION_ITEMS.map((item, index) => (
          <span key={index}>
            <span>{item}</span>
            {index < DESCRIPTION_ITEMS.length - 1 && (
              <span className="mx-1">|</span>
            )}
          </span>
        ))}
      </span>
    </div>
  );
};
