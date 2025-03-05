'use client'
import constants from "@/constants";
import { Montserrat } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

function Success() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    return (
        <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 ${montserrat.className}`}>
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8 animate-bounce">
                        <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        Pagamento Confirmado!
                    </h1>
                    <p>Session ID: {sessionId}</p>

                    <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                        Obrigado por se juntar à família `${constants.platform_name}`! Sua jornada espiritual está prestes a começar.
                    </p>

                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            O que esperar agora:
                        </h2>
                        <ul className="text-left space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Você receberá um WhatsApp de boas-vindas em até 24 horas
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Suas mensagens diárias começarão automaticamente
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Acesso imediato a todas as funcionalidades da sua assinatura
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-600 rounded-xl p-6">
                        <p className="text-gray-600 dark:text-gray-300">
                            Se precisar de ajuda ou tiver alguma dúvida, entre em contato conosco através do WhatsApp de suporte:
                            <br />
                            <span className="font-semibold">+55 (11) 99999-9999</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SuccessWrapped() {
    return (
        <Suspense>
            <Success />
        </Suspense>
    )
}
