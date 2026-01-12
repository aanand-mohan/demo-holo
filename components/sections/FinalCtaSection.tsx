"use client";

import { motion } from "framer-motion";

export default function FinalCtaSection() {
    return (
        <section className="py-32 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-4xl mx-auto px-6 text-center"
            >
                {/* Heading */}
                <h2 className="text-[70px] md:text-[80px] leading-[1.1] font-bold text-[#1D1D1F] mb-4 tracking-tight">
                    Ready to create <br /> agency-like content?
                </h2>

                {/* Sub text */}
                <h3 className="text-xl md:text-2xl text-gray-500 font-medium mb-10">
                    (Without the fees)
                </h3>

                {/* Button */}
                <motion.a
                    href="https://www.tryholo.ai/pricing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-[10px] text-white rounded-[365px] text-lg font-semibold transition-transform hover:scale-105"
                    style={{
                        background: "linear-gradient(104deg, #3e86c6 0%, #a666aa 22.1231%, #ec4492 50.5298%, #ee4454 76.1508%, #f05427 100%)",
                        boxShadow: "inset 0 0 10px #fff",
                        padding: "10px 15px 10px 20px"
                    }}
                >
                    Buy now
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </motion.a>
            </motion.div>
        </section>
    );
}
