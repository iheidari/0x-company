import type { NextPage } from "next";
import Head from "next/head";
import Projects from "../ui/sections/projects";
import Hero from "../ui/sections/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>0x Code Limited</title>
        <meta
          name="description"
          content="Official website of 0x Code Limited company"
        />
      </Head>
      <main>
        <Hero />

        <Projects
          title="Better BC Assessment"
          description="Better BC Assessment is a mobile app that helps you to find your property assessment value in British Columbia. It is a simple and easy to use app."
          imageUrl="/better-bc-assessment.png"
          imageAlt="Better BC Assessment mobile project screen shot"
        />
        <Projects
          title="Kampnearme.com"
          description="Kampnearme.com is a project we are working on. It is a camping site map base search platform. We are using latest technology to provide a smooth user experience for our users."
          imageUrl="/kampnearme.jpg"
          imageAlt="Kampnearme.com project screen shot"
        />
      </main>
    </div>
  );
};

export default Home;
