'use client'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Cancel() {
    return (
        <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 ${montserrat.className}`}>
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8">
                        <svg className="w-20 h-20 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        Pagamento Cancelado
                    </h1>

                    <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                        Parece que você cancelou seu pagamento. Não tem problema! Você pode tentar novamente quando estiver pronto.
                    </p>

                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            O que fazer agora:
                        </h2>
                        <ul className="text-left space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Volte à página inicial para revisar nossos planos
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Experimente nossa versão gratuita
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="/"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                        >
                            Voltar ao Início
                        </a>
                        <a
                            href="#contato"
                            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors"
                        >
                            Falar com Suporte
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}