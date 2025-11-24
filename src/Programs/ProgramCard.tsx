type ProgramCardProps = {
  title: string;
  img: string;
  url: string;
};
export const ProgramCard = ({ title, img, url }: ProgramCardProps) => {
  return (
    <div className="w-full max-w-[320px] md:max-w-md mx-auto md:mx-4 rounded-lg shadow-lg overflow-hidden">
      <img className="w-full object-cover" src={img} alt={title} />
      <div className="px-2 pt-2">
        <div className="h-10">
          <h3 className="text-m font-semibold mb-2">{title}</h3>
        </div>
        <button className=" px-4 py-3 mt-1 mb-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
          <a href={url} rel="noopener noreferrer">
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
};
