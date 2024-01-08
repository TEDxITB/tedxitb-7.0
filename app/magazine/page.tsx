import Image from "next/image";

const TedMagazinePage = () => {
  return (
    <main className="flex flex-auto flex-col items-center justify-center text-white bg-white gap-2 p-2 font-anderson">
      <section className="w-screen h-screen flex justify-center items-center bg-black">
        <p>Hello, world!</p>
      </section>
      <section className="bg-black w-screen p-20">
        <ul className="grid gap-5 grid-cols-4 grid-rows-3 max-w-7xl">
          {(new Array(12)).fill(0).map(_ => {
            return <li className="flex flex-col gap-2 cursor-pointer">
              <Image src={"/magazine-cover-placeholder.png"} alt="cover" width={300} height={300} />
              <p className="text-center">Lorem ipsum dolor sit amet</p>
            </li>
          })}
        </ul>
      </section>
    </main>
  );
};

export default TedMagazinePage;
