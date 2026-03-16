export const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:hidden">
        About Us
      </h2>

      <div className="bg-amber-950 rounded-lg shadow-lg w-full max-w-6xl lg:h-[90vh] lg:overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left Column - Vision & Mission */}
          <div className="flex flex-col">
            {/* VISION */}
            <section className="relative flex-none lg:flex-2 overflow-hidden">
              <img
                src="/about_us_2.png"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Decorative rectangles */}
              <div className="absolute top-0 left-0 w-16 h-full bg-amber-950 opacity-50" />
              <div className="absolute top-0 left-16 w-12 h-full bg-amber-900 opacity-40" />
              <div className="absolute top-0 left-28 w-20 h-2/3 bg-amber-800 opacity-35" />
              <div className="absolute top-0 left-48 w-16 h-1/2 bg-amber-700 opacity-30" />
              <div className="absolute top-1/4 left-64 w-24 h-1/3 bg-yellow-800 opacity-25" />

              <div className="absolute top-0 right-0 w-28 h-full bg-stone-200 opacity-20" />
              <div className="absolute top-0 right-28 w-20 h-3/4 bg-stone-300 opacity-15" />
              <div className="absolute top-1/3 right-48 w-16 h-2/3 bg-amber-600 opacity-20" />

              <div className="absolute bottom-0 left-32 w-32 h-3/5 bg-amber-700 opacity-30" />
              <div className="absolute bottom-0 left-64 w-24 h-2/5 bg-amber-800 opacity-25" />
              <div className="absolute bottom-0 left-0 w-24 h-1/4 bg-yellow-900 opacity-40" />

              <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-amber-600 opacity-20" />
              <div className="absolute top-1/3 right-1/4 w-16 h-24 bg-yellow-700 opacity-15" />
              <div className="absolute bottom-1/4 right-1/3 w-28 h-16 bg-amber-500 opacity-25" />

              <div className="relative z-10 px-5 sm:px-8 lg:px-10 pt-3 sm:pt-4 lg:pt-4 pb-5">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl mb-2">
                  VISION
                </h1>
                <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-prose">
                  Young people learn, practice, and develop skills to co-create
                  a more caring and just society, rooted in reciprocity with the
                  earth and knowledge of ancestral wisdoms. Their work
                  reverberates throughout their communities and inspires
                  gatherings with serious intentions to make the world a better
                  place for all people.
                </p>
              </div>
            </section>

            {/* MISSION */}
            <section className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] bg-gradient-to-br from-green-800 via-emerald-700 to-green-700 overflow-hidden">
              <img
                src="/about_us_1.png"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Decorative rectangles */}
              <div className="absolute top-0 left-0 w-20 h-3/4 bg-emerald-900 opacity-40" />
              <div className="absolute top-0 left-20 w-16 h-2/3 bg-green-800 opacity-35" />
              <div className="absolute top-0 left-36 w-24 h-1/2 bg-emerald-700 opacity-30" />
              <div className="absolute top-1/4 left-60 w-20 h-1/3 bg-green-600 opacity-25" />

              <div className="absolute top-0 right-0 w-32 h-2/3 bg-green-600 opacity-25" />
              <div className="absolute top-1/3 right-32 w-24 h-1/2 bg-emerald-600 opacity-20" />
              <div className="absolute top-0 right-56 w-16 h-3/4 bg-green-700 opacity-30" />

              <div className="absolute bottom-0 left-0 w-28 h-2/5 bg-emerald-800 opacity-35" />
              <div className="absolute bottom-0 left-28 w-20 h-1/3 bg-green-700 opacity-30" />
              <div className="absolute bottom-0 right-0 w-36 h-3/5 bg-green-600 opacity-25" />
              <div className="absolute bottom-0 right-36 w-24 h-2/5 bg-emerald-600 opacity-20" />

              <div className="absolute top-1/2 left-1/4 w-24 h-20 bg-emerald-500 opacity-20" />
              <div className="absolute top-2/3 right-1/3 w-20 h-24 bg-green-500 opacity-15" />
              <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-emerald-700 opacity-25" />

              <svg
                className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 opacity-60"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path
                  d="M200 200C200 100 150 0 50 0L0 0L0 200L200 200Z"
                  fill="#059669"
                  opacity="0.4"
                />
              </svg>

              <div className="relative z-10 px-5 sm:px-8 lg:px-10 pt-4 sm:pt-4 lg:pt-4 pb-5">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl mb-2">
                  MISSION
                </h1>

                <div className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-prose space-y-4">
                  <p>
                    At Ujamaa Garden, we consider access to organic, local, and
                    fresh produce as the necessary first step towards liberatory
                    world-making. In addition to the food and medicine we grow
                    at the garden, our partnerships and programs pair our urban
                    community’s needs with rural resources by bringing food from
                    upstate NY to our community members living under food
                    apartheid. By increasing capacity through food security, we
                    facilitate space for visioning and developing tools to
                    create the world we want to inhabit.
                  </p>
                  <p>
                    Ujamaa Garden is free and open to the public to serve as a
                    gathering place to play, create, rest, and seed nourishing
                    futures.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Core Values */}
          <section className="relative bg-amber-100 overflow-hidden">
            <img
              src="/about_us_3.png"
              alt="Core Values"
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <svg
              className="absolute top-0 right-0 w-72 h-40 sm:w-80 sm:h-48 opacity-80"
              viewBox="0 0 400 200"
              fill="none"
            >
              <path d="M0 0C100 50 200 80 400 60L400 0L0 0Z" fill="#92400E" />
            </svg>

            {/* Keep your decorative rectangles (unchanged) */}
            <div className="absolute top-0 left-0 w-24 h-40 bg-amber-200 opacity-50" />
            <div className="absolute top-0 left-24 w-20 h-56 bg-amber-300 opacity-40" />
            <div className="absolute top-40 left-0 w-32 h-48 bg-amber-100 opacity-60" />
            <div className="absolute top-56 left-24 w-16 h-64 bg-amber-50 opacity-55" />
            <div className="absolute top-0 left-44 w-28 h-32 bg-yellow-100 opacity-45" />

            <div className="absolute top-0 right-0 w-32 h-52 bg-amber-300 opacity-35" />
            <div className="absolute top-52 right-0 w-24 h-40 bg-amber-200 opacity-40" />
            <div className="absolute top-0 right-32 w-20 h-64 bg-yellow-200 opacity-30" />
            <div className="absolute top-1/4 right-52 w-24 h-28 bg-amber-100 opacity-50" />

            <div className="absolute bottom-0 left-0 w-28 h-56 bg-amber-200 opacity-45" />
            <div className="absolute bottom-0 left-28 w-20 h-40 bg-amber-300 opacity-40" />
            <div className="absolute bottom-0 left-48 w-24 h-48 bg-yellow-100 opacity-35" />

            <div className="absolute bottom-0 right-0 w-36 h-64 bg-amber-200 opacity-40" />
            <div className="absolute bottom-64 right-0 w-28 h-32 bg-amber-300 opacity-35" />
            <div className="absolute bottom-0 right-36 w-20 h-52 bg-yellow-200 opacity-45" />

            <div className="absolute top-1/3 left-1/3 w-20 h-24 bg-amber-400 opacity-25" />
            <div className="absolute top-1/2 right-1/3 w-24 h-20 bg-yellow-300 opacity-20" />
            <div className="absolute bottom-1/3 left-1/2 w-16 h-20 bg-amber-300 opacity-30" />
            <div className="absolute top-2/3 left-1/4 w-22 h-16 bg-yellow-200 opacity-25" />

            <svg
              className="absolute bottom-0 left-0 w-80 h-56 sm:w-96 sm:h-64 opacity-50"
              viewBox="0 0 400 300"
              fill="none"
            >
              <path
                d="M0 300C150 250 250 200 400 220L400 300L0 300Z"
                fill="#D4A574"
                opacity="0.6"
              />
              <path
                d="M0 300C100 280 200 260 300 270L300 300L0 300Z"
                fill="#B8956A"
                opacity="0.5"
              />
            </svg>

            <div className="relative z-10 p-6 sm:p-10 lg:p-14">
              <h1 className="text-amber-950 text-4xl sm:text-5xl lg:text-4xl mb-4 tracking-tight">
                CORE VALUES
              </h1>

              <ul className="text-amber-900 text-base sm:text-lg lg:text-xl leading-relaxed space-y-3 max-w-prose pl-5">
                <li className="list-disc">
                  Food sovereignty is the foundation of liberatory world-making.
                </li>
                <li className="list-disc">
                  We center our youth’s dreams, knowledge, and ideas
                </li>
                <li className="list-disc">
                  Awareness and care for the earth and earth systems are
                  essential components of all leadership and guiding frameworks.
                </li>
                <li className="list-disc">
                  We prioritize building with our local community.
                </li>
                <li className="list-disc">
                  Acknowledging the importance and wisdom of generations,
                  species, and beings different from us is essential to create
                  strong coalitions. We build intergenerationally, across
                  cultures and languages, and beyond the human form!
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
