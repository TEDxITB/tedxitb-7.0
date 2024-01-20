import { Magazine } from "../shared";
import "./style.css";
import { Viewer } from "./viewer";
import { getCMSData, magazineQuery, magazineTags } from "@/lib/cms";
import { MagazineQueryResult } from "@/types/cms";

const Page = async () => {
  const { allMonthlyMagazines } = await getCMSData<MagazineQueryResult>(
    magazineQuery,
    magazineTags
  );

  const data: Record<string, Magazine> = {};
  allMonthlyMagazines.forEach((magazine) => {
    data[magazine.id] = magazine;
  });

  return <Viewer data={data} />;
};

export default Page;
