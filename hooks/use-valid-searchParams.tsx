import { useSearchParams } from "next/navigation";

export const useValidSearchParam = ({
  name,
  validArr,
}: {
  name: string;
  validArr: string[];
}) => {
  const searchParams = useSearchParams();
  const param = searchParams.get(name);

  if (param && validArr.includes(param)) {
    return param;
  }

  return null;
};
