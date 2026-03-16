export const TitleText = () => {
  return (
    <div className="w-full  sm:pt-[10px] md:pt-[10px] lg:pt-[10px] flex-1 relative flex flex-col items-center">
      <h1
        className="
          block
          text-center
          mx-auto
          text-[55px]
          sm:text-[120px]
          lg:text-[90px]
          font-cursive font-extrabold text-transparent
          bg-clip-text bg-cover bg-center
          [-webkit-text-stroke:2px_#000]
          leading-none
          bg-[url('/trees-3.jpg')]
        "
      >
        UJAMAA GARDEN
      </h1>

      <span className="mt-2 text-base md:text-xl w-full md:w-2/3 text-center text-black z-10 px-6 md:px-12 font-semibold">
        {" "}
        A youth-centered and experimental learning space, resting ground, and
        community garden located in the Northeast Bronx.
      </span>
    </div>
  );
};
