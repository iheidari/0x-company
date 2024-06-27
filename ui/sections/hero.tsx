import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center my-4">
      <Image
        src="/hero-image.jpg"
        alt="0x Code Limited"
        layout="responsive"
        width={1344}
        height={768}
        className="w-full"
      />
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 bg-white bg-opacity-80 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-4 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          0x Code Limited
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8">
          We love software development
        </h2>
      </div>
    </section>
  );
};

export default Hero;
