import Image from "next/image";
import LOADING from "@/public/loaders/loader-green.gif";

interface LoadingSearchProps {
  query: string;
}

export const LoadingSearch = ({ query }: LoadingSearchProps) => {
  return (
    <div className="text-center text-grey-600 my-10">
      <Image
        alt="Loader Animation"
        width={LOADING.width}
        height={LOADING.height}
        className="h-auto w-28 mx-auto"
        src={LOADING}
      />
      <h2 className="font-medium">Searching for {query} ...</h2>
    </div>
  );
};
