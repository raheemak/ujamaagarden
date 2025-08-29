export const TitleText = () => {
  return (
    <div className="w-full flex-1 relative flex overflow-visible flex-col items-center justify-center bg-[url('ujamaa-bg.png')] bg-cover bg-center">
      {/* <div className="absolute -inset-x-40 -inset-y-56 left-0 right-0  bg-[#8b9b3c] opacity-20 blur-2xl z-0 [clip-path:polygon(10%_85%,90%_45%,95%_60%,50%_80%,5%_60%)]"></div> */}

      <div className="absolute inset-10 top-50 left-0 right-0  bg-[#8b9b3c] opacity-20 blur-2xl z-0 [clip-path:polygon(10%_85%,90%_45%,95%_60%,50%_80%,5%_60%)]"></div>

      <h1
        className="pt-[130px] text-[280px] font-cursive font-extrabold text-transparent 
                   bg-clip-text bg-cover bg-center [-webkit-text-stroke:2px_#000] leading-none 
                   bg-[url('/trees-3.jpg')]"
      >
        UJAMA<span className="ml-3">A</span>
      </h1>

      <h2 className="-mt-5 text-6xl text-[#395339]">community garden.</h2>
    </div>
  );
};
