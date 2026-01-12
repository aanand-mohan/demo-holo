"use client";

import { motion } from "framer-motion";

export default function IntegrationsStackSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Text */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium mb-4 text-black"
          >
            Works seamlessly with your stack
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-gray-500 max-w-3xl mx-auto"
          >
            Post across every major platform, without switching tools.
          </motion.h3>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full rounded-3xl overflow-hidden"
        >
          <video
            src="https://framerusercontent.com/assets/FdlItdC8QwWnBdxOmHwu4Evz14.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
