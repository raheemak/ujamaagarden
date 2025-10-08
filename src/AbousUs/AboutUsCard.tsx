export const AboutUsImg = ({ img }: { img: string }) => {
  return (
    <div className="flex-1 flex justify-center w-1/2 hidden md:block">
      <div className="relative">
        <img
          className="absolute left-0 bottom-0 -translate-x-5 translate-y-30 object-cover"
          src="/watercolor_blob.png"
          alt=""
        />

        <img className="relative object-cover z-10" src={img} alt="" />
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
    <div className="w-full relative flex overflow-visible flex-row items-center justify-center bg-cover bg-center px-12 py-12">
      {children}
    </div>
  );
};
