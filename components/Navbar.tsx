"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Book } from "lucide-react";
import constants from "@/constants";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
                scrolled
                    ? "bg-white/90 backdrop-blur-sm shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Book className="h-6 w-6 text-divine-500" />
                        <span className="font-playfair text-lg font-medium text-divine-700">
                            {constants.platform_name}
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/#about"
                        className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors"
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/#features"
                        className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors"
                    >
                        Recursos
                    </Link>

                    <Link
                        href="/#pricing"
                        className="bg-divine-500 hover:bg-divine-600 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2"
                    >
                        Planos
                    </Link>
                    {/**
                      <button onClick={() => scrollToSection('testimonials')} className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors">
                          Depoimentos
                      </button>
                      <Button
                          onClick={onContactClick}
                          variant="outline"
                          className="bg-transparent border-divine-500 text-divine-500 hover:bg-divine-500/10"
                       >
                          Contato
                      </Button>
                     */}
                </div>

                <Link
                    href="/#pricing"
                    className="md:hidden bg-divine-500 hover:bg-divine-600 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2"
                >
                    Planos
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
