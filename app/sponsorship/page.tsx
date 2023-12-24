import Image from "next/image";
import SponsorshipBackground from "../../public/bg_3 2.png";
import startop1 from "../../public/star icon 4.png";
import starfull from "../../public/star icon 3.png";
import tedlogobottom from "../../public/logo-03 2.png";
import bottomright from "../../public/bottomright.svg";
import qnb from "../../public/qnbdum.png";
import logoxmerah from "../../public/logo per part-05 2.png";
import logonitromerah from "../../public/logo per part-06 2.png";
import ketupatkanan from "../../public/Frame 1000001971.png";
import ketupatkiri from "../../public/Frame 1000001995.png";

export default function Sponsorship() {
  return (
    <main>
      <div className="relative z-10 min-h-[50vh] lg:min-h-[70vh]">
        <Image
          src={SponsorshipBackground}
          alt="background"
          width={1080}
          height={720}
          quality={100}
          className="absolute inset-0 h-full w-full object-cover object-center"
        ></Image>
        <section className="absolute flex h-full w-full flex-col items-center justify-center space-y-10 px-10 text-center font-garamondnova text-white md:items-start md:px-24">
          <div className="flex flex-col items-center justify-center md:items-start">
            <label className="text-[20px] md:text-[28px]">
              Special Thanks To
            </label>
            <label className="text-[40px] md:text-[50px]">OUR SPONSORS</label>
          </div>
          <p className="text-[16px] md:pr-48 md:text-start md:text-[20px]">
            Our success would not be possible without the continued support of
            these incredible partners.
          </p>
        </section>
      </div>
      <div className="relative flex min-h-screen flex-col items-center space-y-8 bg-[#1C1C1C] px-10 py-32 md:px-28">
        <section className="flex flex-row flex-wrap items-center justify-center">
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
        </section>
        <section className="flex flex-row flex-wrap items-center justify-center">
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[125px] w-[135px] rounded-xl bg-white md:h-[150px] md:w-[160px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[120px] -translate-x-1/2 -translate-y-1/2 object-scale-down"
            ></Image>
          </div>
        </section>
        <section className="flex flex-row flex-wrap items-center justify-center">
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
        </section>
        <section className="flex flex-row flex-wrap items-center justify-center">
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
          <div className="relative z-10 mx-2 my-2 h-[75px] w-[85px] rounded-xl bg-white shadow-[15px_10px_50px_-25px_rgba(0,0,0,0.3)] shadow-border md:h-[100px] md:w-[110px]">
            <Image
              src={qnb}
              alt="logo"
              className="absolute left-1/2 top-1/2 w-[60px] -translate-x-1/2 -translate-y-1/2 object-scale-down object-center"
            ></Image>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center space-y-10 py-28 text-center font-anderson text-[16px] text-white">
          <p className="font-anderson md:text-[32px]">
            TedXITB is made possibble thanks to the grate companies and
            community support
          </p>
          <button className="z-20 rounded-[5px] bg-[#FF2B06] px-8 py-3 text-[12px] transition-all hover:scale-110 hover:cursor-pointer md:px-14 md:py-5 md:text-[24px]">
            Become a sponsor
          </button>
        </section>
        {/* <div className="absolute bottom-0 right-0 h-0 w-0 border-r-[165px] border-t-[90px] border-l-transparent border-r-[#6B1F20] border-t-transparent z-50"></div>
        <div className="absolute bottom-0 right-0 h-0 w-0 border-r-[220px] border-t-[120px] border-l-transparent border-r-[#8F1D1E] border-t-transparent z-40"></div> */}
        <Image
          src={startop1}
          alt="bintang1"
          className="absolute left-0 top-[-190px] w-1/4 max-w-[300px]"
        ></Image>
        <Image
          src={bottomright}
          alt="tedlogo"
          className="absolute bottom-0 right-0 z-10 w-[75%] max-w-[800px] object-cover object-center"
          quality={100}
        ></Image>
        <Image
          src={starfull}
          alt="bintangfull"
          className="absolute bottom-8 right-0 w-1/2 max-w-[400px]"
        ></Image>
        <Image
          src={startop1}
          alt="bintang2"
          className="absolute bottom-[200px] left-[-30px] w-1/2 max-w-[200px] lg:hidden"
        ></Image>
        <Image
          src={logonitromerah}
          alt="logoxmerah"
          className="absolute left-[-30px] top-[530px] w-3/4 max-w-[500px]"
        ></Image>
        <Image
          src={ketupatkiri}
          alt="ketupatkiri"
          className="absolute left-0 top-[700px] w-[15%] max-w-[130px]"
        ></Image>
        <Image
          src={logoxmerah}
          alt="logoxmerah"
          className="absolute right-0 top-[200px] w-3/4 max-w-[500px]"
        ></Image>
        <Image
          src={ketupatkanan}
          alt="ketupatkanan"
          className="absolute right-0 top-[350px] w-[15%] max-w-[100px]"
        ></Image>
      </div>
      <div></div>
    </main>
  );
}
