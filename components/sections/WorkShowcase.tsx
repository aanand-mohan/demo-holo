"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CanvasImage from "@/components/ui/CanvasImage";

export default function WorkShowcase() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            if (scrollerRef.current) {
                scrollerRef.current.setAttribute("data-animated", "true");
                // Clone for infinite loop
                const scrollerInner = scrollerRef.current.querySelector(".scroller__inner");
                if (scrollerInner) {
                    // If we haven't cloned yet (check children count roughly)
                    if (scrollerInner.children.length < 10) {
                        const scrollerContent = Array.from(scrollerInner.children);
                        scrollerContent.forEach((item) => {
                            const duplicatedItem = item.cloneNode(true);
                            (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
                            scrollerInner.appendChild(duplicatedItem);
                        });
                    }
                }
            }
        }
    }, []);

    const items = [
        { type: "video", src: "/videos/showcase-1.mp4" },
        { type: "image", src: "/images/avatar1.png" }, // Reusing/Placeholder
        { type: "video", src: "/videos/showcase-2.mp4" },
        { type: "image", src: "/images/avatar2.jpg" },
        { type: "video", src: "/videos/showcase-3.mp4" },
        { type: "image", src: "/images/avatar3.jpg" },
        { type: "video", src: "/videos/showcase-4.mp4" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden md:w-[80%]">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] max-w-4xl mx-auto">
                    You’ve probably seen our work. <br />
                    <span className="text-gray-400">You just didn’t know it was AI.</span>
                </h2>
            </div>

            <div
                ref={scrollerRef}
                className="scroller w-full md:w-[100%] mx-auto"
            >
                <div className="scroller__inner flex gap-8 py-4 w-max flex-nowrap animate-scroll">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="relative w-full h-full">
                                    <CanvasImage
                                        src={item.src}
                                        alt="Work showcase"
                                        className="w-full h-full object-cover"
                                        width={360} // Pass explicit dimensions for canvas resolution
                                        height={480}
                                        intensity={2}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .scroller[data-animated="true"] {
          overflow: hidden;
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }
        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 1rem));
          }
        }
      `}</style>
        </section>
    );
}
