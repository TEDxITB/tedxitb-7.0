import Link from "next/link";

export default function Breadtest() {
  return (
    <main className="m-20 text-xl text-white">
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
