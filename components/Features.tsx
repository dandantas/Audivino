"use client";

import React from "react";
import Image from "next/image";
import constants from "@/constants";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const Features = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { ref: inSectionViewRef, inView: inSectionView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const setSectionRefs = (element: HTMLElement | null) => {
        if (sectionRef.current !== element) {
            sectionRef.current = element;
        }
        inSectionViewRef(element);
    };

    return (
        <section
            id="features"
            ref={setSectionRefs}
            className={cn(
                "py-20 bg-divine-100/30 relative overflow-hidden opacity-0 transition-opacity duration-1000",
                inSectionView && "opacity-100"
            )}
        >
            <Image
                src={
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                }
                alt="People"
                fill
                className="object-cover opacity-5"
                priority
            />
            <div className="absolute inset-0 "></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-divine-300/40 text-divine-600 rounded-full text-sm font-medium mb-4">
                        Recursos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-divine-700 mb-6">
                        Experimente o Melhor do Serviço{" "}
                        {constants.platform_name}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Nossa plataforma oferece recursos cuidadosamente
                        desenvolvidos para proporcionar uma experiência
                        espiritual enriquecedora.
                    </p>
                </div>

                <div className="flex flex-col max-w-3xl mx-auto items-center">
                    <div className="order-2 md:order-1">
                        <div className="space-y-8">
                            <div
                                className={cn(
                                    "opacity-0 transition-opacity duration-700",
                                    inSectionView && "opacity-100"
                                )}
                                style={{
                                    transitionDelay: "0.3s",
                                }}
                            >
                                <div className="flex items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Mensagens Personalizadas
                                        </h3>
                                        <p className="text-gray-600">
                                            Escolha o horário perfeito para
                                            receber suas mensagens diárias e
                                            defina preferências de conteúdo
                                            baseadas em temas bíblicos
                                            específicos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    "opacity-0 transition-opacity duration-700",
                                    inSectionView && "opacity-100"
                                )}
                                style={{
                                    transitionDelay: "0.6s",
                                }}
                            >
                                <div className="flex items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Qualidade de Áudio Premium
                                        </h3>
                                        <p className="text-gray-600">
                                            Narrações com vozes profissionais e
                                            clareza excepcional, acompanhadas
                                            por música ambiente suave para criar
                                            uma experiência imersiva.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    "opacity-0 transition-opacity duration-700",
                                    inSectionView && "opacity-100"
                                )}
                                style={{
                                    transitionDelay: "0.9s",
                                }}
                            >
                                <div className="flex items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Mensagens Contextualizadas
                                        </h3>
                                        <p className="text-gray-600">
                                            Receba reflexões bíblicas que
                                            conectam as escrituras sagradas com
                                            os desafios da vida moderna,
                                            trazendo aplicações práticas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    "opacity-0 transition-opacity duration-700",
                                    inSectionView && "opacity-100"
                                )}
                                style={{
                                    transitionDelay: "1.2s",
                                }}
                            >
                                <div className="flex items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Impacto Social
                                        </h3>
                                        <p className="text-gray-600">
                                            Acompanhe como sua assinatura ajuda
                                            em projetos sociais com relatórios
                                            mensais sobre as ações beneficentes
                                            realizadas.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center mt-4">
                                    <a
                                        href="https://wa.me/5514991711964?text=Olá!%20Gostaria%20de%20experimentar%20o%20Audivino%20e%20receber%20minha%20primeira%20mensagem%20bíblica%20em%20áudio"
                                        target="_blank"
                                        className="bg-[#25D366] hover:bg-[#075E54] text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none py-2 h-11 rounded-md px-8"
                                    >
                                        <svg
                                            width="22" // Increased width
                                            height="22" // Increased height
                                            viewBox="0 0 360 362"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M307.546 52.5655C273.709 18.685 228.706 0.0171895 180.756 0C81.951 0 1.53846 80.404 1.50408 179.235C1.48689 210.829 9.74646 241.667 25.4319 268.844L0 361.736L95.0236 336.811C121.203 351.096 150.683 358.616 180.679 358.625H180.756C279.544 358.625 359.966 278.212 360 179.381C360.017 131.483 341.392 86.4547 307.546 52.5741V52.5655ZM180.756 328.354H180.696C153.966 328.346 127.744 321.16 104.865 307.589L99.4242 304.358L43.034 319.149L58.0834 264.168L54.5423 258.53C39.6304 234.809 31.749 207.391 31.7662 179.244C31.8006 97.1036 98.6334 30.2707 180.817 30.2707C220.61 30.2879 258.015 45.8015 286.145 73.9665C314.276 102.123 329.755 139.562 329.738 179.364C329.703 261.513 262.871 328.346 180.756 328.346V328.354ZM262.475 216.777C257.997 214.534 235.978 203.704 231.869 202.209C227.761 200.713 224.779 199.966 221.796 204.452C218.814 208.939 210.228 219.029 207.615 222.011C205.002 225.002 202.389 225.372 197.911 223.128C193.434 220.885 179.003 216.158 161.891 200.902C148.578 189.024 139.587 174.362 136.975 169.875C134.362 165.389 136.7 162.965 138.934 160.739C140.945 158.728 143.412 155.505 145.655 152.892C147.899 150.279 148.638 148.406 150.133 145.423C151.629 142.432 150.881 139.82 149.764 137.576C148.646 135.333 139.691 113.287 135.952 104.323C132.316 95.5909 128.621 96.777 125.879 96.6309C123.266 96.5019 120.284 96.4762 117.293 96.4762C114.302 96.4762 109.454 97.5935 105.346 102.08C101.238 106.566 89.6691 117.404 89.6691 139.441C89.6691 161.478 105.716 182.785 107.959 185.776C110.202 188.767 139.544 234.001 184.469 253.408C195.153 258.023 203.498 260.782 210.004 262.845C220.731 266.257 230.494 265.776 238.212 264.624C246.816 263.335 264.71 253.786 268.44 243.326C272.17 232.866 272.17 223.893 271.053 222.028C269.936 220.163 266.945 219.037 262.467 216.794L262.475 216.777Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Experimentar agora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
