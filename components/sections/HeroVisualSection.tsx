"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const IntegrationsSection: FC = () => {
  return (
    <section
      id="integrations-1"
      className="relative w-full max-w-6xl mx-auto h-auto md:h-[360px] rounded-xl overflow-hidden bg-white"
    >
      <div className="flex flex-col-reverse md:flex-row w-full h-[340px] md:h-full">
        {/* Left empty / content space - Hidden or reduced on mobile if it's just spacing */}
        <div className="hidden md:block md:flex-1" />

        {/* Right visual / video area */}
        <div className="relative w-full md:w-[55%] h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <video
              src="https://framerusercontent.com/assets/aKlkISNlkFIAN7YpD6NSnfVmE8.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="
                w-full h-full object-cover
                filter
                saturate-[1.4]
                contrast-[1.18]
              "
            />
          </motion.div>

          {/* ❌ white overlay removed to preserve color */}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
