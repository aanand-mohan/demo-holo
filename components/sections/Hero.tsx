"use client";

import Image from "next/image";
import CanvasImage from "@/components/ui/CanvasImage";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-start pt-32 pb-20 px-4 max-w-7xl mx-auto text-center z-10">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[#FFFFFF]"></div>
            {/* <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(242, 245, 249, 0.15)_100%)]"></div> */}


            {/* 1. Eyebrow Badge */}
            {/* 1. Eyebrow Badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wide">
                    <span className="text-purple-600">AI for </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">Marketing</span>
                </span>
            </div>

            {/* 2. Headlines */}
            <h1 className="text-5xl md:text-[68px] font-[900] leading-[1.05] tracking-tight text-[#1D1D1F] max-w-4xl mb-6">
                Launch 10x more content. <br className="hidden md:block" />
                75% faster.
            </h1>

            <p className="text-xl md:text-[28px] font-medium text-[#6E6E73] max-w-3xl leading-relaxed mb-12">
                Holo turns your website into ads, emails, and social posts. 100&#39;s of content pieces generated, while you sleep.
            </p>

            {/* 3. CTA Button */}
            <div className="group relative rounded-full p-[3px] bg-[linear-gradient(104deg,#3e86c6_0%,#a666aa_22%,#ec4492_50%,#ee4454_76%,#f05427_100%)] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-16">
                <div className="bg-transparent rounded-full">
                    <Link href="#" className="block px-8 py-4 text-lg font-bold text-white flex items-center gap-2">
                        Buy now
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 11L11 1M11 1H1M11 1V11" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* 4. Trust Badges - Updated with real logos */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 opacity-90 transition-all duration-500">
                <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 relative flex-shrink-0">
                        <CanvasImage src="/images/framer-logo.png" alt="Framer" width={32} height={32} className="object-contain w-8 h-8" intensity={0.5} />
                    </div>
                    <div className="flex flex-col text-xs font-semibold text-gray-500 leading-tight">
                        <span className="block text-gray-800">Backed by VC funds</span>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-400">5MM valuation</span>
                            <Image src="/images/sparkle.svg" alt="" width={10} height={10} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 relative flex-shrink-0">
                        <CanvasImage src="/images/openai-logo.png" alt="OpenAI" width={32} height={32} className="object-contain w-8 h-8" intensity={0.5} />
                    </div>
                    <div className="flex flex-col text-xs font-semibold text-gray-500 leading-tight">
                        <span className="block text-gray-800">Powered by OpenAI</span>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-400">Leading AI model</span>
                            <Image src="/images/sparkle.svg" alt="" width={10} height={10} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Main Visual (Holo Bot) */}
            {/* 5. Main Visual (Holo Bot) */}
            <div className="relative w-full max-w-[800px] flex justify-center">

                {/* Ground shadow (ye white layout me allowed hai) */}
                <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[60%] h-[36px] bg-black/5 blur-2xl rounded-[100%] -z-10"></div>

                {/* VIDEO – color clarity boost only */}
                <video
                    src="/videos/hero-visual.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="
            object-contain w-full h-auto
            filter
            saturate-[1.4]
            contrast-[1.18]
        "
                />
            </div>


            {/* 6. Customer Rating Section */}
            <div className="mt-[-20px] md:mt-[-40px] z-20 flex items-center gap-3 bg-transparent px-4 py-2">
                <div className="flex -space-x-2">
                    <CanvasImage src="/images/avatar1.png" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                    <CanvasImage src="/images/avatar2.jpg" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                    <CanvasImage src="/images/avatar3.jpg" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                    <CanvasImage src="/images/avatar4.png" alt="" width={24} height={24} className="w-6 h-6 rounded-full border border-white" intensity={0.5} />
                </div>
                <div className="text-xs font-medium text-gray-600">
                    <span className="font-bold text-black">4.9/5</span> from 4268 customers
                </div>
            </div>

        </section>
    );
}
