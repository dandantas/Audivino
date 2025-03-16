"use client";

import { cn } from "@/lib/utils";
import { Book, Heart, Users, Globe } from "lucide-react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
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
            id="about"
            ref={setSectionRefs}
            className={cn(
                "py-20 bg-white relative opacity-0 transition-opacity duration-1000",
                inSectionView && "opacity-100"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-divine-100 text-divine-600 rounded-full text-sm font-medium mb-4">
                        Nossa Missão
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-divine-700 mb-6">
                        Compartilhando a Palavra Divina para Transformar Vidas
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nosso objetivo é levar a mensagem bíblica para a vida
                        cotidiana das pessoas através de áudios inspiradores,
                        proporcionando reflexão espiritual diária e contribuindo
                        para causas beneficentes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className={cn(
                            "glass-card rounded-xl p-6 transform transition-opacity hover:translate-y-[-8px] opacity-0 duration-700",
                            inSectionView && "opacity-100"
                        )}
                        style={{
                            transitionDelay: "0.3s",
                        }}
                    >
                        <div className="h-12 w-12 bg-divine-100 rounded-lg flex items-center justify-center mb-5">
                            <Book className="h-6 w-6 text-divine-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-divine-700 mb-3">
                            Palavra Diária
                        </h3>
                        <p className="text-gray-600">
                            Mensagens bíblicas selecionadas para inspirar,
                            motivar e guiar seu dia com sabedoria espiritual.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "glass-card rounded-xl p-6 transform transition-opacity hover:translate-y-[-8px] opacity-0 duration-700",
                            inSectionView && "opacity-100"
                        )}
                        style={{
                            transitionDelay: "0.6s",
                        }}
                    >
                        <div className="h-12 w-12 bg-divine-100 rounded-lg flex items-center justify-center mb-5">
                            <Heart className="h-6 w-6 text-divine-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-divine-700 mb-3">
                            Ações Beneficentes
                        </h3>
                        <p className="text-gray-600">
                            Parte de cada assinatura é destinada a projetos
                            sociais e de caridade, espalhando o amor ao próximo.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "glass-card rounded-xl p-6 transform transition-opacity hover:translate-y-[-8px] opacity-0 duration-700",
                            inSectionView && "opacity-100"
                        )}
                        style={{
                            transitionDelay: "0.9s",
                        }}
                    >
                        <div className="h-12 w-12 bg-divine-100 rounded-lg flex items-center justify-center mb-5">
                            <Users className="h-6 w-6 text-divine-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-divine-700 mb-3">
                            Comunidade
                        </h3>
                        <p className="text-gray-600">
                            Faça parte de uma comunidade que busca crescimento
                            espiritual e compartilha os mesmos valores.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "glass-card rounded-xl p-6 transform transition-opacity hover:translate-y-[-8px] opacity-0 duration-700",
                            inSectionView && "opacity-100"
                        )}
                        style={{
                            transitionDelay: "1.2s",
                        }}
                    >
                        <div className="h-12 w-12 bg-divine-100 rounded-lg flex items-center justify-center mb-5">
                            <Globe className="h-6 w-6 text-divine-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-divine-700 mb-3">
                            Alcance Global
                        </h3>
                        <p className="text-gray-600">
                            Expandindo a mensagem bíblica para além das
                            fronteiras, alcançando pessoas em qualquer lugar.
                        </p>
                    </div>
                </div>

                <div
                    className={cn(
                        "mt-16 bg-divine-100 rounded-2xl p-8 shadow-sm border border-divine-200 opacity-0 transition-opacity duration-700",
                        inSectionView && "opacity-100"
                    )}
                    style={{
                        transitionDelay: "1.5s",
                    }}
                >
                    <div className="flex flex-col items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-divine-700 mb-4">
                                Nosso Compromisso
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Estamos comprometidos com a excelência na
                                entrega da palavra de Deus, com qualidade de
                                áudio impecável e pontualidade nas mensagens
                                diárias.
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full bg-divine-500 flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                    </div>
                                    <span className="text-gray-700">
                                        Conteúdo bíblico profundo e acessível
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full bg-divine-500 flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                    </div>
                                    <span className="text-gray-700">
                                        Narrações profissionais e envolventes
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full bg-divine-500 flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                    </div>
                                    <span className="text-gray-700">
                                        Transparência nas ações beneficentes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
