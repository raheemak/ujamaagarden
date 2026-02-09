export const TitleText = () => {
  return (
    <div className="w-full pt-80 sm:pt-[130px] flex-1 relative flex flex-col items-center">
      <h1
        className="
          block
          text-center
          mx-auto
          text-[55px]
          sm:text-[120px]
          md:text-[180px]
          lg:text-[100px]
          font-cursive font-extrabold text-transparent
          bg-clip-text bg-cover bg-center
          [-webkit-text-stroke:2px_#000]
          leading-none
          bg-[url('/trees-3.jpg')]
        "
      >
        UJAMAA GARDEN
      </h1>

      <br />

      <span className="text-xl w-2/3 text-center text-black z-10 px-4">
        A youth-centered and experimental learning space, resting ground, and
        community garden located in the Northeast Bronx.
      </span>
    </div>
  );
};
