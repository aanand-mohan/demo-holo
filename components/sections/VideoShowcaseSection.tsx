"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoShowcaseSection() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  const handlePlay = () => {
    setPlay(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  return (
    <section className="w-full flex justify-center py-12 md:py-32 bg-white">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 120 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full max-w-6xl h-[280px] md:h-[520px] rounded-xl md:rounded-[28px] bg-[#efefef] overflow-hidden mx-4 md:mx-0"
      >
        {/* Background grid */}
        <div className="absolute inset-0 grid grid-cols-4 gap-6 p-6 opacity-40">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl bg-gray-300/70"
            />
          ))}
        </div>

        {/* THUMBNAIL + OVERLAY */}
        {!play && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 z-10"
          >
            {/* Thumbnail */}
            <img
              src="https://framerusercontent.com/images/4UZO9Ldwd2eIpiw8du2WL4CyJpA.gif?width=770&height=500"
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 rounded-[20px] bg-black/20 flex items-center justify-center"
            >
              {/* Play Button */}
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="w-[52px] h-[52px] cursor-pointer"
              >
                <img
                  src="https://framerusercontent.com/images/lvCLJVvbePZax9kaGZgoEKdc8E.svg"
                  alt="Play"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </button>
        )}

        {/* VIDEO */}
        {play && (
          <>
            <video
              ref={videoRef}
              src="https://framerusercontent.com/assets/k5nnBiuxdvLozxn9RYRxyo4gmhU.mp4"
              playsInline
              muted
              controls
              className="absolute inset-0 w-full h-full object-cover rounded-[28px]"
            />

            {/* CTA */}
            <div className="absolute bottom-6 right-6 z-20">
              <img
                src="https://framerusercontent.com/images/lvCLJVvbePZax9kaGZgoEKdc8E.svg"
                alt="Button"
                className="h-12 cursor-pointer hover:scale-105 transition"
              />
            </div>
          </>
        )}

        {/* Inner border */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
      </motion.div>
    </section>
  );
}
