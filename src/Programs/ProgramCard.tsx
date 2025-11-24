type ProgramCardProps = {
  title: string;
  img: string;
  url: string;
};
export const ProgramCard = ({ title, img, url }: ProgramCardProps) => {
  return (
    <div className="w-full max-w-md  rounded-lg shadow-lg overflow-hidden m-4">
      <img className="w-full object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="h-10">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          <a href={url} rel="noopener noreferrer">
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
};
