import Link from "next/link";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function Breadtest() {
  return (
    <main className="m-20 text-xl text-white">
      <div className="m-10 grid gap-6">
          <Breadcrumbs homeElement={"Home"} variant="default" />
          <Breadcrumbs homeElement={"Home"} variant="highlighted" />
        </div>
      <p>Ini buat test breadcrumbs (klik page yg mana)</p>
      <ul className="flex list-none space-x-2">
        <li>
          <Link href="/test" className="text-blue-500 hover:text-white">
            test
          </Link>
        </li>
        <li>
          <Link
            href="/test/breadcrumbs"
            className="text-blue-500 hover:text-white"
          >
            breadcrumbs
          </Link>
        </li>
        <li>
          <Link
            href="/test/breadcrumbs/projects"
            className="text-blue-500 hover:text-white"
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/test/breadcrumbs/projects/documents"
            className="text-blue-500 hover:text-white"
          >
            documents
          </Link>
        </li>
      </ul>
    </main>
  );
}
