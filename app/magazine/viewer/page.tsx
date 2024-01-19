import "./style.css";
import { getCMSData, magazineQuery, magazineTags } from "@/lib/cms";
import { Viewer } from "./viewer";
import { MagazineQueryResult } from "@/types/cms";
import { Magazine } from "../shared";

const Page = async () => {
  const { allMonthlyMagazines } = await getCMSData<MagazineQueryResult>(
    magazineQuery,
    magazineTags
  )

  const data: Record<string, Magazine> = {}
  allMonthlyMagazines.forEach(magazine => {
    data[magazine.id] = magazine
  })

  return <Viewer data={data} />
}

export default Page;
