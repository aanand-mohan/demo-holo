"use client";

import { motion } from "framer-motion";

export default function PrivacySection() {
  return (
    <section className="w-full flex justify-center py-32 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-center px-6"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 text-black">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3zm0 4a3 3 0 00-3 3v2H8v4h8v-4h-1V9a3 3 0 00-3-3zm-1 5V9a1 1 0 012 0v2h-2z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          Great powers come
        </h2>

        {/* Sub line */}
        <div className="flex justify-center items-center gap-2 text-xl mb-6">
          <span className="text-gray-600">with great</span>
          <span className="font-medium bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            privacy.
          </span>
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-500 text-base md:text-lg">
          <p>
            Your brand is your greatest asset. We protect it with full
            encryption, zero sharing, and absolute control in your hands.
          </p>
          <p>
            Stay in control – from your first post to your hundredth campaign,
            and everything after.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
