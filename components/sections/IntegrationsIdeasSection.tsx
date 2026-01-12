"use client";

import { useEffect, useRef } from "react";

const TAGS = [
    { label: "Mythbuster", color: "text-red-500" },
    { label: "Features", color: "text-pink-500" },
    { label: "Us vs Them", color: "text-purple-500" },
    { label: "Testimonials", color: "text-orange-500" },
    { label: "Best-sellers", color: "text-blue-500" },
    { label: "Media", color: "text-purple-500" },
    { label: "Negative Hook", color: "text-orange-500" },
    { label: "Problem-solution", color: "text-orange-500" },
    { label: "Statistics", color: "text-blue-500" },
    { label: "Notes", color: "text-red-500" },
    { label: "What’s Inside", color: "text-pink-500" },
    { label: "FAQ", color: "text-red-500" },
    { label: "Before & After", color: "text-pink-500" },
    { label: "Top X Reasons", color: "text-purple-500" },
];

const firstRow = TAGS.slice(0, 7);
const secondRow = TAGS.slice(7);

function MarqueeRow({ items, reverse = false }: { items: typeof TAGS; reverse?: boolean }) {
    return (
        <div className="relative flex overflow-hidden select-none gap-4">
            <div className={`flex shrink-0 w-max gap-4 ${reverse ? 'ideas-animate-marquee-reverse' : 'ideas-animate-marquee'}`}>
                {items.map((tag, i) => (
                    <span
                        key={i}
                        className={`
              px-5 py-3 rounded-full
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              text-sm font-semibold
              whitespace-nowrap
              ${tag.color}
            `}
                    >
                        {tag.label}
                    </span>
                ))}
                {items.map((tag, i) => (
                    <span
                        key={`dup-${i}`}
                        className={`
              px-5 py-3 rounded-full
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              text-sm font-semibold
              whitespace-nowrap
              ${tag.color}
            `}
                    >
                        {tag.label}
                    </span>
                ))}
                {items.map((tag, i) => (
                    <span
                        key={`dup2-${i}`}
                        className={`
              px-5 py-3 rounded-full
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              text-sm font-semibold
              whitespace-nowrap
              ${tag.color}
            `}
                    >
                        {tag.label}
                    </span>
                ))}
                {items.map((tag, i) => (
                    <span
                        key={`dup3-${i}`}
                        className={`
              px-5 py-3 rounded-full
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.06)]
              text-sm font-semibold
              whitespace-nowrap
              ${tag.color}
            `}
                    >
                        {tag.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function IntegrationsIdeasSection() {
    return (
        <section className="bg-white py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-sm text-gray-500 mb-4">
                            Unlimited Ads and Social Media Post Ideas
                        </p>

                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                            Fill Your Content Calendar,
                            <br />3 Months In Advance
                        </h2>

                        <p className="text-gray-500 text-lg max-w-xl mb-10">
                            You rest. Holo doesn’t. It works in the background to generate
                            marketing visuals while you sleep. So you can swipe in the
                            morning and launch just before lunch.
                        </p>

                        {/* INFO CARD */}
                        <div className="flex items-start gap-4  rounded-2xl p-4 max-w-md bg-white">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                                <img className="w-full bg-white h-full object-contain" src="https://framerusercontent.com/images/UoQeU7lV0WfE98U8Ynxnviyi2A.png?scale-down-to=512&width=736&height=708" alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-yellow-500">
                                    Like Tinder, but for content.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Swipe to skip, save, or generate what you like best.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="relative w-full h-[420px] rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                        <div className="absolute bottom-6 w-[60%] h-[30px] bg-black/5 blur-2xl rounded-full" />

                        <video
                            src="https://framerusercontent.com/assets/85orujrTWcY7RrRFXiFMzEPMA.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="relative max-w-[85%] max-h-[85%] object-contain bg-white"
                        />
                    </div>
                </div>

                {/* IDEA COUNT */}
                <p className="mt-24 text-center text-lg font-medium text-gray-900">
                    1000&apos;s of available ideas
                </p>

                {/* MOVING TAGS */}
                <div className="relative mt-10 overflow-hidden flex flex-col gap-6 mask-gradient">
                    <MarqueeRow items={firstRow} />
                    <MarqueeRow items={secondRow} reverse />
                </div>
            </div>

            {/* CSS */}
            <style jsx global>{`
        .mask-gradient {
             mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }
        .ideas-animate-marquee {
          animation: ideas-marquee 35s linear infinite;
        }
        .ideas-animate-marquee-reverse {
          animation: ideas-marquee-reverse 35s linear infinite;
        }

        @keyframes ideas-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }
        
         @keyframes ideas-marquee-reverse {
          from {
            transform: translateX(-25%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    );
}
