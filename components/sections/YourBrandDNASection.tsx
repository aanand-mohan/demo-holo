'use client';

import { motion } from "framer-motion";

export default function YourBrandDNASection() {
  return (
    <section id="your-brand-dna" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs font-medium rounded-full border border-blue-300 text-blue-600 mb-4">
            Powered By
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            Your Brand DNA
          </h2>

          <p className="text-base md:text-lg text-gray-500">
            From brand tone to audience pain points. Holo’s AI learns what makes
            you unique. Then builds with it.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-5 lg:-mt-6">
            <MiniCard
              title="Captures Your Style"
              desc="Understands your creative vision. So every asset feels like it came from inside your team."
            >
              <div className="flex gap-2 mt-4">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-purple-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-pink-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
              </div>
            </MiniCard>

            <MiniCard
              title="Learns Buying Triggers"
              desc="It goes beyond tone. Our AI ad maker learns how your customers think when they’re ready to buy."
            >
              <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 overflow-hidden flex">
                <div className="w-1/4 bg-red-400" />
                <div className="w-1/4 bg-yellow-400" />
                <div className="w-1/4 bg-lime-400" />
                <div className="w-1/4 bg-green-400" />
              </div>
            </MiniCard>
          </div>

          {/* CENTER (NO CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <video
              src="https://framerusercontent.com/assets/PrQYypIOc9BMvyvYIt9MrkyMKKc.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-[320px] md:w-[360px] rounded-2xl"
            />
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5 lg:-mt-6">
            <MiniCard
              title="Knows Your Audience"
              desc="Learns your customer’s mindset, habits, and pain points, then builds content they actually care about."
            >
              <div className="flex gap-3 mt-4 text-base">
                <span>📘</span>
                <span>🐦</span>
                <span>📸</span>
                <span>🎵</span>
              </div>
            </MiniCard>

            <MiniCard
              title="Keeps Data Private"
              desc="Your brand data stays private. It’s never shared, trained on, or reused."
            >
              <span className="inline-flex items-center gap-2 mt-4 px-3 py-1 text-xs border rounded-full">
                🔒 100% guarantee
              </span>
            </MiniCard>
          </div>

        </div>
      </div>
    </section>
  );
}

interface MiniCardProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
}

function MiniCard({ title, desc, children }: MiniCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
    >
      <h3 className="text-sm font-semibold text-black mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-snug">
        {desc}
      </p>
      {children}
    </motion.div>
  );
}
