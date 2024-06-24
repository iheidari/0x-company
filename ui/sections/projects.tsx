import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

const Projects = (props: Props) => {
  return (
    <section className="my-4 bg-theme-yellow bg-opacity-50">
      <div className="flex flex-row text-white">
        <div className="w-1/2 p-4">
          <Image
            src={props.imageUrl}
            alt={props.imageAlt}
            width={512}
            height={512}
            className="w-512 h-512"
          />
        </div>
        <div className="w-1/2 p-4 flex flex-col ">
          <h3 className="text-3xl font-semibold mt-5 mb-5">{props.title}</h3>
          <div>{props.description}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
