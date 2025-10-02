export const AboutUs = () => {
  return (
    <div className="w-full flex-1 relative flex overflow-visible flex-col items-center justify-center bg-white bg-cover bg-center px-6 py-12">
      <div className="absolute inset-10 top-50 left-0 right-0  bg-[#8b9b3c] opacity-10 blur-2xl z-0 [clip-path:polygon(10%_85%,90%_45%,95%_60%,50%_80%,5%_60%)]"></div>
      <h1
        className="pt-[50px] text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-cursive font-extrabold text-transparent 
             bg-clip-text bg-cover bg-center [-webkit-text-stroke:1.5px_#000] leading-none 
             bg-[url('/trees-3.jpg')]"
      >
        ABOUT US
      </h1>
      <h2>Vision</h2>
      <p>
        Young people learn, practice, and develop skills to co-create a more
        more caring and just society, rooted in reciprocity with the earth and
        knowledge of ancestral wisdoms. Their work is reverberated throughout
        their communities and inspires gatherings with serious intentions to
        make the world a better place for all people.
      </p>
      <br />

      <h2>Mission</h2>
      <p>
        At Ujamaa Garden, we consider access to organic, local, and fresh
        produce as the necessary first step towards liberatory world-making. Our
        partnerships and programs pair our urban community’s needs with rural
        resources by bringing food from upstate NY to our community members
        living under food apartheid. By increasing capacity through food
        security, we facilitate space for visioning and developing tools to
        create the world we want to inhabit. Ujamaa Garden is free and open to
        open to the public to serve as a gathering place to play, create, rest,
        and seed nourishing futures.
      </p>
      <br />

      <h2>Core Values</h2>
      <p>
        <li>Food sovereignty is the foundation to liberatory world-making. </li>
        <li>
          It is important to center our youth’s dreams, knowledge, and ideas.
        </li>
        <li>
          Awareness and care for the earth and earth systems is an essential
          component of all leadership and guiding frameworks.
        </li>
        <li>We prioritize building with our local community. </li>
        <li>
          Acknowledging the importance and wisdom of generations, species, and
          beings different from us is essential to create strong coalitions.
        </li>
        <li>
          We build intergenerationally, across cultures and languages, and
          beyond the human human form!
        </li>
      </p>
    </div>
  );
};
