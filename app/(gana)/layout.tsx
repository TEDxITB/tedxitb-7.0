import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-[100dvh] w-full items-center justify-center bg-white">
      {children}
    </section>
  );
};

export default layout;
