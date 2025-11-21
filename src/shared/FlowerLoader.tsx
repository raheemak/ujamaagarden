type FlowerLoaderProps = {
  loadingText: string;
};
export const FlowerLoader = ({ loadingText }: FlowerLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <img src="/flower_loader.gif" alt="Flower" className="w-60 h-60" />
      <p className="mt-4 text-gray-600 text-lg font-medium">
        {loadingText} ...
      </p>
    </div>
  );
};
