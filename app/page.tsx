import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
    return (
        <div
            className={`min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 ${montserrat.className}`}
        >
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Heavenly background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800 dark:text-white animate-fade-in-down">
                            Whats Divino
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
                            Receba orientação espiritual diária através de mensagens de voz
                            divinas, entregando passagens bíblicas diretamente no seu WhatsApp
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 cursor-pointer">
                            Comece Sua Jornada Espiritual
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        Recursos Divinos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-animation">
                        <div className="text-center p-6 hover:transform hover:scale-105 transition-all glass-effect rounded-xl">
                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600 dark:text-blue-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                Voz Celestial
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Vozes divinas personalizáveis entregando suas mensagens com
                                graça
                            </p>
                        </div>
                        <div className="text-center p-6 hover:transform hover:scale-105 transition-all glass-effect rounded-xl">
                            <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-purple-600 dark:text-purple-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                Programação Diária
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Defina seu horário preferido para receber mensagens espirituais
                            </p>
                        </div>
                        <div className="text-center p-6 hover:transform hover:scale-105 transition-all glass-effect rounded-xl">
                            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-600 dark:text-green-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                Passagens Selecionadas
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Versículos bíblicos cuidadosamente selecionados para sua
                                inspiração diária
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Image
                        src="https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?auto=format&fit=crop&q=80"
                        alt="Fundo divino"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
                        Escolha Seu Plano de Bênçãos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-animation">
                        {/* Basic Plan */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                                    Bênçãos Básicas
                                </h3>
                                <p className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                                    R$49,90
                                    <span className="text-lg text-gray-600 dark:text-gray-400">
                                        /mês
                                    </span>
                                </p>
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <svg
                                            className="w-5 h-5 mr-2 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Mensagens matinais diárias
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <svg
                                            className="w-5 h-5 mr-2 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        1 opção de voz
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <svg
                                            className="w-5 h-5 mr-2 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Seleção básica de passagens
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer">
                                    Começar Agora
                                </button>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all relative overflow-hidden">
                            <div>
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rotate-45 bg-yellow-400 transform origin-bottom-left"></div>
                                <h3 className="text-2xl font-bold mb-4 text-white text-center">
                                    Bênçãos Premium
                                </h3>
                                <p className="text-4xl font-bold mb-6 text-white text-center">
                                    R$99,90<span className="text-lg text-gray-200">/mês</span>
                                </p>
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center text-white">
                                        <svg
                                            className="w-5 h-5 mr-2 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Múltiplas mensagens diárias
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg
                                            className="w-5 h-5 mr-2 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        5 opções de voz
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg
                                            className="w-5 h-5 mr-2 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Programação personalizada
                                    </li>
                                    <li className="flex items-center text-white">
                                        <svg
                                            className="w-5 h-5 mr-2 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        Biblioteca premium de passagens
                                    </li>
                                </ul>
                                <div>
                                    <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer">
                                        Obter Premium
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Try Out Section */}
            <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <Image
                        src="https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?auto=format&fit=crop&q=80"
                        alt="Fundo espiritual"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8 animate-float">
                            <Image
                                src="https://img.icons8.com/fluency/96/000000/holy-bible.png"
                                alt="Ícone da Bíblia"
                                width={96}
                                height={96}
                                className="mx-auto dark:invert"
                            />
                        </div>
                        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white animate-fade-in-down">
                            Experimente uma Mensagem Divina
                        </h2>
                        <p className="text-xl mb-12 text-gray-600 dark:text-gray-300 animate-fade-in-up">
                            Experimente nosso serviço agora e receba uma mensagem de voz
                            celestial diretamente no seu WhatsApp
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl glass-effect">
                            <input
                                type="text"
                                placeholder="Digite seu número do WhatsApp"
                                className="w-full md:w-96 px-4 py-3 rounded-lg mb-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            />
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                                Enviar Mensagem Teste
                            </button>
                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                Respeitamos sua privacidade. Seu número será usado apenas para
                                esta demonstração.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-900 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                    Mensagem divina
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                Trazendo mensagens divinas para seu dia a dia
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Termos
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Privacidade
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                Contato
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
