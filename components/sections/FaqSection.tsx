"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is Holo?",
        a: "Holo is your all-in-one AI marketing tool. It creates ads, social posts, and emails that sound and look like they came from your team. No templates. No generic fluff.",
    },
    {
        q: "How is this AI tool for advertising different from others?",
        a: "Holo learns your brand DNA, is trained on millions of high-performing assets, and supports 95+ languages. It’s built for conversion, not filler content.",
    },
    {
        q: "Do I need marketing or technical knowledge?",
        a: "No. Holo is built for founders and creators who want speed without a learning curve.",
    },
    {
        q: "What kind of content can Holo generate?",
        a: "Ad creatives, social posts, email sequences, promotional campaigns, and more. All aligned to your brand.",
    },
    {
        q: "Can I manage multiple brands in one account?",
        a: "Yes. Manage up to 10 brands, each with its own workspace and Brand DNA.",
    },
    {
        q: "Is Holo better than ChatGPT?",
        a: "ChatGPT is general-purpose. Holo is built specifically for marketing. No prompts. No tweaking. Just ready-to-launch assets.",
    },
    {
        q: "Do you have a free trial?",
        a: "No free trial, but Holo includes a 14-day money-back guarantee.",
    },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[#fffff] flex flex-col justify-center items-center py-[80px] px-[40px] overflow-hidden relative">
            <div className="w-full max-w-[1200px] flex flex-col items-center gap-[40px]">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold text-center mb-16"
                >
                    FAQ
                </motion.h2>

                {/* FAQ LIST */}
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <FaqItem
                            key={i}
                            index={i}
                            open={open === i}
                            onToggle={() => setOpen(open === i ? null : i)}
                            {...item}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}

/* ---------------- FAQ ITEM ---------------- */

function FaqItem({
    q,
    a,
    open,
    onToggle,
}: {
    q: string;
    a: string;
    open: boolean;
    onToggle: () => void;
    index: number;
}) {
    return (
        <motion.div
            layout
            className="bg-white border border-[#E5E5E5] rounded-[24px] overflow-hidden transition-all hover:border-gray-300"
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
            >
                <h4 className="text-[19px] leading-snug font-semibold text-[#1D1D1F] pr-8">{q}</h4>

                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-lg"
                >
                    +
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="px-6 pb-6 text-gray-600"
                    >
                        <p>{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
