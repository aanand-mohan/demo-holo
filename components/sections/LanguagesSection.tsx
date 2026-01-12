"use client";

import { motion } from "framer-motion";

export default function LanguagesSection() {
    return (
        <section className="relative w-full py-40 bg-white overflow-hidden flex items-center justify-center">
            <div className="relative w-full max-w-7xl px-6">
                {/* Background Image */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://framerusercontent.com/images/UXeVdoBzDwbXAlHHkls74MgE6Z0.png?width=1813&height=1555"
                        alt="Languages background"
                        className="w-full max-w-[1200px] object-contain"
                    />
                </div>

                {/* Center Heading */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-[56px] font-semibold text-black text-center"
                    >
                        99+ languages
                    </motion.h2>
                </div>

                {/* Floating Card - Paper Plane */}

            </div>
        </section>
    );
}
