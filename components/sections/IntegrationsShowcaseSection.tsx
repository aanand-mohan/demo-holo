"use client";

import { motion } from "framer-motion";

export default function IntegrationsShowcaseSection() {
  return (
    <section className="w-full bg-white py-32">
      {/* HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-[40px] leading-tight font-semibold">
          Built for people doing the work.
          <br />
          Used by those who move fast.
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* LEFT */}
        <TestimonialCard
          name="Anna Clark"
          text="I run everything solo and Holo basically saved my life lol. Content posts, ads, everything ready without babysitting. 10/10."
          image="https://framerusercontent.com/images/XX7bmvFdF1LpqpvkxQ7a4nMUYc.webp"
        />

        {/* CENTER */}
        <div className="flex flex-col gap-6">
          <TestimonialCard
            name="Luker Leffer"
            verified
            text="Getting started was easy, way easier than I thought. Took about 10 min and my brand content was ready to go."
            image="https://framerusercontent.com/images/PstWRHA2Tjq9QjoiDQzG1CEljQ.webp"
            footer="US · Mar 4, 2025"
          />

          <TestimonialCard
            name="Jonas Berfasus"
            text="Posting is simple now. Social media posts used to take me HOURS. Now it’s like 10 minutes a day. Crazy."
            footer="LT · Mar 1, 2025"
            faded
          />
        </div>

        {/* RIGHT */}
        <TestimonialCard
          name="Rachel Green"
          verified
          text="I’m not super techy and this was simple to set up. Content actually matched our style. Would recommend!"
          image="https://framerusercontent.com/images/pISsMLj8xbGyqMiJ2Mj3XNhtioA.webp"
        />
      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto mt-14 flex items-center justify-center gap-4 text-sm text-gray-600">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/40?img=${i + 10}`}
              className="w-7 h-7 rounded-full border border-white"
              alt=""
            />
          ))}
        </div>
        <span className="font-medium">4268+ founders love Holo</span>
        <button className="flex items-center gap-1 font-medium text-black">
          View more
          <span className="text-lg">+</span>
        </button>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function TestimonialCard({
  name,
  text,
  image,
  footer,
  verified,
  faded,
}: {
  name: string;
  text: string;
  image?: string;
  footer?: string;
  verified?: boolean;
  faded?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: faded ? 0.45 : 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-3xl p-5 flex flex-col gap-4"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-200" />
        <div className="text-sm font-medium flex items-center gap-1">
          {name}
          {verified && <span className="text-blue-500">✔</span>}
        </div>
      </div>

      {/* TEXT */}
      <p className="text-gray-700 leading-relaxed text-sm">{text}</p>

      {/* MEDIA */}
      {image && (
        <img
          src={image}
          alt=""
          className="w-full rounded-2xl object-cover"
        />
      )}

      {/* FOOTER */}
      {footer && (
        <span className="text-xs text-gray-400 mt-auto">{footer}</span>
      )}
    </motion.div>
  );
}
