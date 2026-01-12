"use client";

import { motion } from "framer-motion";

export default function FullWidthVideoSection() {
  return (
    <section className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-[520px]"
      >
        <video
          src="https://framerusercontent.com/assets/wVOvfhHbICVcDAbiNHQ4O9y54QA.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
