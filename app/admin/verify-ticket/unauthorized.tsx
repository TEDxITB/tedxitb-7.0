const UnathorizedSection = () => {
  return (
    <main className="flex h-full min-h-[calc(100vh-96px)] items-center justify-center bg-[#1C1C1C] px-5 py-12 sm:p-16 lg:p-24">
      <section className="flex flex-col gap-4 text-center font-anderson text-white">
        <h1 className="text-3xl font-bold uppercase lg:text-5xl">
          Unauthorized Request
        </h1>
        <p className="text-base lg:text-xl">
          Please contact Website Team if you think this is a mistake.
        </p>
      </section>
    </main>
  );
};

export default UnathorizedSection;
