export const AboutUsImg = ({ img }: { img: string }) => {
  return (
    <div className="flex-1 flex justify-center w-full md:w-1/2">
      <div className="relative w-full h-64 md:w-auto md:h-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          src="/watercolor_blob.png"
          alt=""
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img
            className="object-cover w-full h-full md:w-auto md:h-auto"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export const AboutUsText = ({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) => {
  return (
    <div className="flex-1 pr-3 w-full md:w-auto ">
      <h2 className="text-xl ">{title}</h2>
      <br />

      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => (
            <li className="list-disc pl-5" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};
export const AboutUsCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full relative flex overflow-visible flex-col md:flex-row items-center justify-center bg-cover bg-center px-4 py-8 md:px-12 md:py-12">
      {children}
    </div>
  );
};
