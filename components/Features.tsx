"use client";

import React from "react";
import { Check } from "lucide-react";
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
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
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
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
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
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
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
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
