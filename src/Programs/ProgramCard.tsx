type ProgramCardProps = {
  title: string;
  img: string;
  url: string;
  text: string;
};

export const ProgramCard = ({ title, img, url, text }: ProgramCardProps) => {
  return (
    <a href={url} rel="noopener noreferrer">
      <div className="w-full max-w-[320px] md:max-w-md mx-auto md:mx-4 rounded-lg shadow-lg overflow-hidden border border-gray-300">
        <img className="w-full h-80 object-cover" src={img} alt={title} />
        <div className="px-2 pt-4 pb-6 flex flex-col justify-between h-40">
          <div className="h-16">
            <h3 className="text-m font-semibold mb-2">{title}</h3>
          </div>
          <span className="text-md mb-4">
            <p>
              {text} <i className="text-gray-500"> Read More</i>
            </p>
          </span>
        </div>
      </div>
    </a>
  );
};
