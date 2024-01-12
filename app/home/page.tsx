import Carousel from "./caraousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center">
      <div className="w-screen min-h-[calc(100vh-6rem)] bg-[url('/bg-homepage.png')] bg-cover bg-center flex justify-center items-center z-10">
        <div className="w-[70%] flex flex-col justify-center items-center gap-[70px]">
          <div className="text-ted-white font-garamond w-full  flex flex-col justify-center items-center gap-[10px] ">
            <h1 className="text-[48px] md:text-[70px] lg:text-[96px] font-bold drop-shadow-[2px_4px_25px_rgba(255,255,255,0.50)]">
              TEDxITB 7.0
            </h1>
            <h3 className="text-[32px] md:text-[42px] lg:text-[64px] font-bold drop-shadow-[2px_4px_25px_rgb(255,255,255)] text-center">
              The Impact Originator Hub
            </h3>
          </div>
          <div className="w-full flex justify-center items-center">
            <Link href="/main-event">
              <Button
                className="font-garamond text-[16px] md:rounded-lg rounded-full  md:text-[22px] font-bold px-[45px] py-[14px]"
                variant="primary"
              >
                Register Main Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="hidden md:flex absolute bg-contain bg-left bg-no-repeat w-full md:h-[800px] lg:h-[1090px] bg-[url('/Rectangle.png')] z-5 left-0 top-[-600px]"></div>
        <div className="flex md:hidden absolute bg-contain justify-center items-center w-full h-full z-5">
          <div className="absolute bg-contain bg-left bg-no-repeat w-full h-[320px] bg-[url('/Rectangle.png')] z-5"></div>
        </div>

        <div className="w-full flex justify-center items-center px-[35px] sm:px-[50px] backdrop-filter backdrop-blur-[80px] md:backdrop-blur-[100px] bg-opacity-40 bg-slate-900 py-[150px] md:py-[200px] z-10 pb-20">
          <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col justify-center items-center gap-[30px] ">
            <div className="flex flex-col justify-center items-center text-ted-white font-anderson gap-[35px] p-[30px] w-full backdrop-filter  bg-opacity-[0.05] bg-white rounded-lg shadow-[2px_4px_25px_0px_rgba(255,255,255,0.10)]">
              <h4 className="w-full text-left text-[36px] md:text-[40px] font-bold ">
                About TED
              </h4>
              <p className="w-full text-left text-[16px] md:text-[24px] ">
                TED is a nonprofit devoted to spreading ideas, usually in the
                form of short, powerful talks (18 minutes or less) with a
                mission to spread ideas. We welcome people from every discipline
                and culture who seek a deeper understanding of the world.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-ted-white font-anderson gap-[35px] p-[30px] w-full backdrop-filter  bg-opacity-[0.05] bg-white rounded-lg shadow-[2px_4px_25px_0px_rgba(255,255,255,0.10)]">
              <h4 className="w-full text-left text-[36px] md:text-[40px] font-bold ">
                About TEDx
              </h4>
              <p className="w-full text-left text-[16px] md:text-[24px] ">
                TEDx is an international community that organizes TED-style
                events anywhere and everywhere, celebrating locally-driven ideas
                and elevating them to a global stage. TEDx events are produced
                independently of TED conferences, each event curates speakers on
                their own, but based on {"TED's"} format and rules.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit overflow-hidden">
        <div className="absolute w-full h-full flex justify-end items-center z-5">
          <div className="bg-contain bg-right bg-no-repeat bg-[url('/Rectangle(1).png')] w-full h-[400px]  md:h-[600px] lg:h-[750px]"></div>
        </div>

        <div className="w-full flex justify-center items-center px-[35px] sm:px-[50px] backdrop-filter backdrop-blur-[80px] md:backdrop-blur-[100px] bg-opacity-40 bg-slate-900 py-[150px] md:py-[200px] z-10">
          <div className="relative w-full md:w-[80%] lg:w-[70%] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col font-anderson text-white w-full justify-start items-start ">
              <h2 className="w-fit text-left text-[40px] md:text-[72px] lg:text-[96px] font-bold italic leading-tight bg-gradient-to-r from-[#FEB20E] to-transparent to-50%">
                TEDxITB 7.0
              </h2>
              <h4 className="w-full text-left text-[24px]  md:text-[48px] italic">
                The Impact Orginator Hub
              </h4>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-7">
              <p className="w-full text-left text-white text-[16px] md:text-[24px]">
                More than just a talk event where people seat-listen-leave.
              </p>

              <p className="w-full text-left text-white text-[16px] md:text-[24px]">
                We shape community and serve as an Impact Originators Hub for
                the local originators to recognize, connect, and mutually
                inspire each other, leading to a broader impact for the society.
              </p>

              <p className="w-full text-left text-white text-[16px] md:text-[24px]">
                Young people are the originators of significant ideas and those
                who bring about positive influences to the society. However, the
                platforms where this ideas born might be challenging for them to
                access or even difficult to find.
              </p>

              <p className="w-full text-left text-white text-[16px] md:text-[24px]">
                This 7.0 series of TEDxITB aims not just to be a half-day event
                consisting great talks from various speakers and great
                performances. It aims to be more than that, it will serve as an
                IMPACT ORIGINATOR HUB throughout the event for the local
                originators to recognize, connect, and mutually inspire each
                other, leading to greater and broader impact to the society.
              </p>

              <p className="w-full text-left text-white text-[16px] md:text-[24px]">
                TEDxITB 7.0 creates an impactful hub for the local youth as it
                becomes the most classy, prestigious, exclusive yet inclusive in
                ITB.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit overflow-hidden">
        <div className="absolute w-full h-full flex flex-col md:justify-center justify-around items-center z-5">
          <div className="bg-contain bg-center bg-no-repeat bg-[url('/Rectangle(2).png')] w-full h-[300px] md:h-[500px]"></div>
          <div className="md:hidden flex bg-contain bg-center bg-no-repeat bg-[url('/Rectangle(2).png')] w-full h-[300px] md:h-[500px]"></div>
        </div>
        <div className="w-full flex justify-center items-center px-[35px] sm:px-[50px] backdrop-filter backdrop-blur-[80px] md:backdrop-blur-[100px] bg-opacity-40 bg-slate-900 py-[150px] md:py-[200px] z-10">
          <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col justify-center gap-12 items-center">
            <div className="w-full text-center flex items-center justify-center">
              <h3 className="font-anderson text-[32px] md:text-[40px] text-white">
                Behind Our Logo
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full md:gap-7 gap-12">
              <div className="flex flex-col md:flex-row justify-center items-start w-full md:gap-7 gap-12">
                <div className="w-full flex flex-col justify-start items-center md:gap-7 gap-12 rounded-md min-h-[380px] md:min-h-[450px]">
                  <div className="backdrop-filter backdrop-blur-md bg-opacity-5 bg-white rounded-md flex justify-center items-center w-full aspect-square">
                    <Image
                      alt=""
                      src="/xlogo.png"
                      className="aspect-square"
                      fill
                    />
                  </div>
                  <p className="font-anderson text-[18px] text-white text-center w-full">
                    TEDxITB 7.0: The Impact Orginator Hub
                  </p>
                </div>
                <div className="w-full flex flex-col justify-start items-center md:gap-7 gap-12 rounded-md min-h-[380px] md:min-h-[450px]">
                  <div className="backdrop-filter backdrop-blur-md bg-opacity-5 bg-white rounded-md flex justify-center items-center w-full aspect-square">
                    <Image
                      alt=""
                      src="/xlogo2.png"
                      className="aspect-square"
                      fill
                    />
                  </div>
                  <p className="font-anderson text-[18px] text-white text-center w-full">
                    7 as TEDxITB 7.0
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-start w-full md:gap-7 gap-12">
                <div className="w-full flex flex-col justify-start items-center md:gap-7 gap-12 rounded-md min-h-[380px] md:min-h-[450px]">
                  <div className="backdrop-filter backdrop-blur-md bg-opacity-5 bg-white rounded-md flex justify-center items-center w-full aspect-square">
                    <Image
                      alt=""
                      src="/xlogo.png"
                      className="aspect-square"
                      fill
                    />
                  </div>
                  <p className="font-anderson text-[18px] text-white text-center w-full">
                    Symbolize {'"connect"'} as this years TEDxITB focusing on
                    being a hub for people to connect
                  </p>
                </div>
                <div className="w-full flex flex-col justify-start items-center md:gap-7 gap-12 rounded-md min-h-[380px] md:min-h-[450px]">
                  <div className="backdrop-filter backdrop-blur-md bg-opacity-5 bg-white rounded-md flex justify-center items-center w-full aspect-square">
                    <Image
                      alt=""
                      src="/xlogo3.png"
                      className="aspect-square"
                      fill
                    />
                  </div>
                  <p className="font-anderson text-[18px] text-white text-center w-full">
                    Symbolize TEDx as an event that encourage people to connect
                    with others
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center md:items-start z-5 md:pt-[180px]">
          <div className="bg-contain bg-center bg-no-repeat bg-[url('/Rectangle(3).png')] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]  md:w-[600px] md:h-[600px]"></div>
        </div>
        <div className="w-full h-fit py-[150px] md:py-[200px] backdrop-filter backdrop-blur-[100px] bg-opacity-40 bg-slate-900 z-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
