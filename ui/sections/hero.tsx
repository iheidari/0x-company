import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center my-4">
      <Image
        src="/hero-image.jpg"
        alt="0x Code Limited"
        width={1344}
        height={768}
      />
      <div className="absolute left-9 bg-white bg-opacity-80 p-4 m-4 rounded-lg">
        <h1 className="text-6xl font-bold">0x Code Limited</h1>
        <h2 className="text-xl pt-7">We love software development</h2>
      </div>
    </section>
  );
};

export default Hero;
