"use client";
import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import constants from "@/constants";

const Features = () => {
    return (
        <section
            id="features"
            className="py-20 bg-divine-100/30 relative overflow-hidden"
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
                        Experimente o Melhor do Serviço {constants.platform_name}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Nossa plataforma oferece recursos cuidadosamente desenvolvidos para
                        proporcionar uma experiência espiritual enriquecedora.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Mensagens Personalizadas
                                        </h3>
                                        <p className="text-gray-600">
                                            Escolha o horário perfeito para receber suas mensagens
                                            diárias e defina preferências de conteúdo baseadas em
                                            temas bíblicos específicos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="animate-fade-in animate-delay-300">
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Qualidade de Áudio Premium
                                        </h3>
                                        <p className="text-gray-600">
                                            Narrações com vozes profissionais e clareza excepcional,
                                            acompanhadas por música ambiente suave para criar uma
                                            experiência imersiva.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="animate-fade-in animate-delay-600">
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Mensagens Contextualizadas
                                        </h3>
                                        <p className="text-gray-600">
                                            Receba reflexões bíblicas que conectam as escrituras
                                            sagradas com os desafios da vida moderna, trazendo
                                            aplicações práticas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="animate-fade-in animate-delay-900">
                                <div className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-full bg-divine-500/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-5 w-5 text-divine-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-divine-700 mb-2">
                                            Impacto Social
                                        </h3>
                                        <p className="text-gray-600">
                                            Acompanhe como sua assinatura ajuda em projetos sociais
                                            com relatórios mensais sobre as ações beneficentes
                                            realizadas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 animate-float">
                        <div className="relative">
                            <div className="bg-white shadow-xl rounded-2xl p-4 border border-divine-200 max-w-md mx-auto">
                                <div className="flex items-center bg-divine-100 rounded-xl p-4 mb-6">
                                    <div className="h-12 w-12 bg-divine-300 rounded-lg flex items-center justify-center mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 6l6 6m0 0l-6 6"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-divine-700">
                                            {constants.platform_name}
                                        </h4>
                                        <p className="text-sm text-divine-600">
                                            Configuração de Mensagens
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Horário de entrega
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="bg-divine-500 text-white font-medium text-sm px-3 py-1.5 rounded-md">
                                            07:00
                                        </div>
                                        <div className="bg-divine-100 text-divine-600 font-medium text-sm px-3 py-1.5 rounded-md">
                                            12:00
                                        </div>
                                        <div className="bg-divine-100 text-divine-600 font-medium text-sm px-3 py-1.5 rounded-md">
                                            20:00
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Voz do narrador
                                    </label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                                        <option>Pedro (Masculino)</option>
                                        <option>Maria (Feminino)</option>
                                        <option>João (Masculino)</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Temas preferidos
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-divine-100 text-divine-600 text-xs px-2 py-1 rounded-full">
                                            Fé
                                        </span>
                                        <span className="bg-divine-100 text-divine-600 text-xs px-2 py-1 rounded-full">
                                            Esperança
                                        </span>
                                        <span className="bg-divine-500 text-white text-xs px-2 py-1 rounded-full">
                                            Sabedoria
                                        </span>
                                        <span className="bg-divine-100 text-divine-600 text-xs px-2 py-1 rounded-full">
                                            Paz
                                        </span>
                                        <span className="bg-divine-100 text-divine-600 text-xs px-2 py-1 rounded-full">
                                            Família
                                        </span>
                                    </div>
                                </div>

                                <button className="w-full bg-divine-500 text-white font-medium py-2 rounded-lg hover:bg-divine-600 transition-colors">
                                    Salvar Preferências
                                </button>
                            </div>

                            <div className="absolute -bottom-4 -right-4 h-64 w-64 bg-divine-300/20 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -top-8 -left-8 h-40 w-40 bg-divine-100 rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
