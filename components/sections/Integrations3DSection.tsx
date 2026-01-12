"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MEDIA_MAP: Record<string, string[]> = {
  Videos: [
    "https://framerusercontent.com/assets/atJu9yiIxWsCyaNh4njvIoNJ58A.mp4",
    "https://framerusercontent.com/assets/XfoGiuFqT2FPLtYXPTJQ4Gca6k.mp4",
    "https://framerusercontent.com/assets/SPeCEAHu2em9JMalRJd7unubVw.mp4",
    "https://framerusercontent.com/assets/2Sv2SsEaYbQTzuNiMP2j69zR0w.mp4",
  ],
  Ads: [
    "https://framerusercontent.com/images/iUStjBsDFrJVUv1CDQyW7Sv0.webp?width=682&height=1080",
    "https://framerusercontent.com/images/XExvNpmDLVlIJmKAe33PFgRWJKE.webp?width=682&height=1080",
    "https://framerusercontent.com/images/2VTZndnfh23XWnoA7sbs2rzyqUw.webp?width=681&height=1080",
    "https://framerusercontent.com/images/u56AnbgMpS8s9cIrIDR75BJa0WY.webp?width=682&height=1080",
    "https://framerusercontent.com/images/4qXNDQuJmatdQe6jU7QOJ21BBo.webp?width=682&height=1080",
    "https://framerusercontent.com/images/kARPt7WrJEUKTDnSqXL2yYcq4bY.webp?width=682&height=1080",
  ],
  Socials: [
    "https://framerusercontent.com/images/u2FqocyLnd42JB1zL2rYM9n9wHs.webp?width=1080&height=1350",
    "https://framerusercontent.com/images/ztxvCPEXwNmvvJBYMufxMUzFG8.webp?width=1080&height=1350",
    "https://framerusercontent.com/images/p87MCHRgAPZsQiZrerQbhPuXpUM.webp?width=1080&height=1350",
    "https://framerusercontent.com/images/OfEj9hmOxvoV6AtX9S4SOYsNH0.webp?width=1080&height=1350",
    "https://framerusercontent.com/images/UGVYEpnU4Q8eTE5Vs4mdArswg.webp?width=1080&height=1350",
    "https://framerusercontent.com/images/wXtzVz9HpShok8V8FNHmony9eM.webp?width=1080&height=1350",
  ],
  Emails: [
    "https://framerusercontent.com/images/M8GupQLcrPfBikFDQltYAHGn8.webp?width=580&height=920",
    "https://framerusercontent.com/images/mGA45jMbdw6ZiWIjLkeCSnODDA.webp?width=580&height=920",
    "https://framerusercontent.com/images/HXbGcXKoNhg8jzLvpYoLoeePo.webp?width=580&height=920",
    "https://framerusercontent.com/images/qQvWo8JHSeB76rmM2lF0UEz3HnM.webp?width=580&height=920",
    "https://framerusercontent.com/images/OenDwgvqP9xRRfFmFsrKtjD1pw.webp?width=580&height=920",
    "https://framerusercontent.com/images/Lq9KXWiO8O4DyMiQ9Zb0oYoB7o.webp?width=580&height=920",
  ],
};

const TABS = ["Videos", "Ads", "Socials", "Emails"];

export default function Integrations3DSection() {
  const [activeTab, setActiveTab] = useState("Videos");
  const mediaItems = MEDIA_MAP[activeTab];

  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            The All-in-One Marketing Tool
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Skip the tools, templates, and tabs. This is your AI for marketing.
          </p>
        </div>

        {/* 3D MEDIA SPACE */}
        <div className="relative h-[420px] flex items-center justify-center mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotateY: 360 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                rotateY: { repeat: Infinity, duration: 45, ease: "linear" },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="relative w-full max-w-[360px] h-[360px]"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
              }}
            >
              {mediaItems.map((src, i) => {
                const angle = (360 / mediaItems.length) * i;
                const isVideo = src.endsWith(".mp4");
                return (
                  <div
                    key={src}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(420px)`,
                    }}
                  >
                    {isVideo ? (
                      <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-[220px] h-[140px] rounded-2xl object-cover shadow-lg bg-black"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`Integration ${i}`}
                        className="w-[200px] h-[280px] rounded-2xl object-cover shadow-lg bg-gray-100"
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-lg font-medium transition-colors ${activeTab === tab ? "text-black" : "text-gray-500"
                }`}
            >
              {tab}
              <span
                className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-[3px] w-10 rounded-full transition-all ${activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  : "bg-gray-300"
                  }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section >
  );
}
