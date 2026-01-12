'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Facebook,
  Mail,
  Instagram,
  User,
  Video,
  Megaphone,
  Users
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Use cases", hasDropdown: true },
    { name: "Affiliate", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About us", href: "#" },
    { name: "Login", href: "#" },
  ];

  const useCases = [
    { label: "Facebook Ads Maker", icon: Facebook, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { label: "AI Newsletter Generator", icon: Mail, bgColor: "bg-gray-100", iconColor: "text-gray-600" },
    { label: "Instagram Ads Maker", icon: Instagram, bgColor: "bg-pink-50", iconColor: "text-pink-600" },
    { label: "AI UGC Generator", icon: User, bgColor: "bg-purple-50", iconColor: "text-purple-600" },
    { label: "TikTok Video Generator", icon: Video, bgColor: "bg-blue-50", iconColor: "text-blue-500" },
    { label: "Ad Generator", icon: Megaphone, bgColor: "bg-orange-50", iconColor: "text-orange-500" },
    { label: "Influencer Generator", icon: Users, bgColor: "bg-rose-50", iconColor: "text-rose-500" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div
        className={`
          relative mx-auto flex items-center
          transition-all duration-500 ease-in-out
          px-6
          ${isScrolled
            ? "max-w-[1400px] justify-between"
            : "max-w-fit justify-center gap-3"
          }
        `}
      >
        {/* LOGO */}
        <motion.div
          className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-sm rounded-full p-1.5"
          animate={{ x: isScrolled ? -50 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <Link href="/" className="block relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </Link>
        </motion.div>

        {/* NAV MENU */}
        <motion.div
          className="hidden md:flex pointer-events-auto bg-white/90 backdrop-blur-md shadow-sm rounded-full px-6 py-3 items-center gap-6"
          animate={{
            opacity: isScrolled ? 0 : 1,
            scale: isScrolled ? 0.94 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ pointerEvents: isScrolled ? "none" : "auto" }}
        >
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href || "#"}
                className="text-[15px] font-medium text-gray-800 hover:text-black transition flex items-center gap-1 whitespace-nowrap py-2"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`opacity-50 transition-transform duration-200 ${hoveredItem === item.name ? "rotate-180" : ""
                      }`}
                  >
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                )}
              </Link>

              {/* DROPDOWN */}
              {item.hasDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{
                    opacity: hoveredItem === item.name ? 1 : 0,
                    y: hoveredItem === item.name ? 0 : 10,
                    scale: hoveredItem === item.name ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    absolute top-full -left-4 mt-1 w-72 
                    bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] 
                    border border-gray-100 p-2 overflow-hidden
                    ${hoveredItem === item.name ? "pointer-events-auto" : "pointer-events-none"}
                  `}
                >
                  <div className="flex flex-col gap-0.5">
                    {useCases.map((useCase) => (
                      <Link
                        key={useCase.label}
                        href="#"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${useCase.bgColor}`}
                        >
                          <useCase.icon className={`w-4 h-4 ${useCase.iconColor}`} strokeWidth={2} />
                        </div>
                        <span className="text-base font-bold text-gray-800 group-hover:text-black">
                          {useCase.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="
            pointer-events-auto
            group
            relative
            rounded-full
            p-[2px]
            bg-[linear-gradient(107deg,#3e86c6_0%,#a666aa_25%,#ec4492_49%,#ee4454_73%,#f05427_100%)]
            shadow-sm
          "
          animate={{ x: isScrolled ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <div className="bg-white rounded-full px-6 py-2.5">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-semibold text-black whitespace-nowrap"
            >
              Buy now
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <path d="M1 11L11 1M11 1H1M11 1V11" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* MOBILE MENU */}
        <div className="md:hidden pointer-events-auto bg-white/90 backdrop-blur-md shadow-sm rounded-full p-3 ml-3">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
