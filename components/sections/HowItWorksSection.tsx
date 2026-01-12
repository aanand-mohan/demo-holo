"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Input your URL",
    text: "Drop your website link and Holo's AI will learn your brand in minutes.",
    video:
      "https://framerusercontent.com/assets/xraB9gTdokcD9EEBke0DIbvXzXU.mp4",
    gradient: "from-[#3E86C6] to-[#A666AA]",
  },
  {
    step: "02",
    title: "Swipe ideas",
    text: "Our AI content creator delivers fresh ideas every single day",
    video:
      "https://framerusercontent.com/assets/s9If74dnp3LTbVF2LYWmlmvaN8.mp4",
    gradient: "from-[#A666AA] to-[#EC4492]",
  },
  {
    step: "03",
    title: "Edit & customize",
    text: "Change anything, no design skills needed.",
    video:
      "https://framerusercontent.com/assets/0uCEojyWXbdNzE6zejj75lnC4.mp4",
    gradient: "from-[#EE4454] to-[#F05427]",
  },
  {
    step: "04",
    title: "Download & publish",
    text: "Launch 10x more content, 75% faster.",
    video: null,
    gradient: "from-gray-300 to-gray-300",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-24"
        >
          How Our AI Marketing Tool Works
        </motion.h2>

        {/* Steps */}
        <div className="space-y-28">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[80px_1fr] gap-12"
            >
              {/* Left line + number */}
              <div className="relative flex flex-col items-center">
                <div className="text-lg font-medium text-gray-500 mb-4">
                  {step.step}
                </div>
                <div
                  className={`w-[4px] flex-1 rounded-full bg-gradient-to-b ${step.gradient}`}
                />
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-lg">
                    {step.text}
                  </p>
                </div>

                {/* Video */}
                {step.video && (
                  <div className="rounded-2xl overflow-hidden shadow-sm bg-white">
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover bg-white"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
