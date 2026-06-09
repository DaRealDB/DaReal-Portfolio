"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TILE_IMAGES = {
  education: "/School1.png",
  work: "/Leadership.jpg",
  location: "/Place.jpg",
  mindset: "/Mindset.jpg",
  default: "/Profile.jpg",
} as const;

type TileKey = keyof typeof TILE_IMAGES;

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const currentImage = activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default;

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
          About <span className="text-gradient-shimmer">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem]">
        <article className="md:hidden col-span-1 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Profile</p>
          <h3 className="mt-2 text-3xl font-black leading-[1.05]">Daryl D. Bacusmo</h3>
          <p className="mt-2 text-xs text-(--muted)">Computer Engineering Student</p>
        </article>

        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border border-(--card-border)">
          <Image
            src={TILE_IMAGES.default}
            alt="Center"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </article>

        <article className="hidden md:flex col-span-1 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-7">
          <div className="flex w-full flex-col justify-center text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Profile</p>
            <h3 className="mt-2 text-4xl font-black leading-[1.05]">Daryl D. Bacusmo</h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-(--muted)">
              Computer Engineering Student
            </p>
          </div>
        </article>

        <article
          onMouseEnter={() => setActiveTile("education")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-2 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold uppercase text-(--foreground)">
            Education
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            BS in Computer Engineering (Expected: Dec 2026) at Cebu Institute of Technology – University. Relevant Coursework: OOP, Data Structures & Algorithms, Database Systems, Computer Networks, Web Development, Operating Systems.
          </p>
        </article>

        <article
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 md:col-start-3 md:row-start-2 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold">Leadership</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            Academic Project Collaborator: Led requirements-gathering, task distribution, and mentored peers in Git workflow and debugging.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Leadership", "Collaboration", "Git Workflow", "Debugging", "Code Review"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-(--muted)"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <article
          onMouseEnter={() => setActiveTile("location")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-1 h-full min-h-[9rem] rounded-2xl border border-(--card-border) overflow-hidden relative transition-all duration-200 hover:border-violet-400/40"
        >
          <Image
            src={TILE_IMAGES.location}
            alt="Location"
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <p className="text-xl font-bold leading-none">Cebu City</p>
            <p className="text-[11px] text-(--muted)">Philippines</p>
          </div>
        </article>

        <article
          onMouseEnter={() => setActiveTile("mindset")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 md:col-start-1 md:row-start-2 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold">Mindset</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            Building more than software. My passions provide the discipline and focus I need to grow.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={TILE_IMAGES.mindset}
              alt="Mindset"
              width={700}
              height={900}
              className="h-44 w-full object-cover"
            />
          </div>
        </article>

        <article className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border border-(--card-border) overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt="Center"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
