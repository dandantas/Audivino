import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book } from "lucide-react";
import constants from "@/constants";

interface NavbarProps {
    onContactClick: () => void;
}

const Navbar = ({ }: NavbarProps) => {
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

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
                scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Book className="h-6 w-6 text-divine-500" />
                    <span className="font-playfair text-lg font-medium text-divine-700">
                        {constants.platform_name}
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors"
                    >
                        Sobre
                    </button>
                    <button
                        onClick={() => scrollToSection("features")}
                        className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors"
                    >
                        Recursos
                    </button>
                    <button
                        onClick={() => scrollToSection("pricing")}
                        className="font-medium text-sm text-gray-700 hover:text-divine-500 transition-colors"
                    >
                        Planos
                    </button>
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
                    <Button
                        onClick={() => scrollToSection("cta")}
                        className="bg-divine-500 hover:bg-divine-600 text-white"
                    >
                        Começar
                    </Button>
                </div>

                <Button
                    onClick={() => scrollToSection("cta")}
                    className="md:hidden bg-divine-500 hover:bg-divine-600 text-white"
                >
                    Começar
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
