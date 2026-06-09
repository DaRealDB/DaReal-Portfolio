import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Other } from "@/sections/Other";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Daryl D. Bacusmo | Portfolio</title>
        <meta
          name="description"
          content="Personal developer portfolio of Daryl D. Bacusmo, Computer Engineering Student."
        />
      </Head>

      <main className="pb-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Other />
      </main>
      <Footer />
    </>
  );
}
