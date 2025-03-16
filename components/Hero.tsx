import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-visible mt-4">
            <div className="absolute inset-0 bg-gradient-to-b from-divine-100/40 to-white z-0"></div>

            {/* Background elements */}
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-divine-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-divine-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-gradient-to-t from-white to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10 opacity-0 animate-fade-in">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 max-w-2xl">
                        <Badge className="mb-4 bg-divine-500/10 text-divine-600 hover:bg-divine-500/20 backdrop-blur-sm opacity-0 animate-fade-in px-3 py-1.5">
                            Palavra Divina Todo Dia
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-divine-700 opacity-0 animate-fade-in">
                            Mensagens Bíblicas Diárias
                            <span className="text-divine-500">
                                {" "}
                                via WhatsApp
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 animate-fade-in opacity-0 animate-delay-300">
                            Receba inspiração diária através de mensagens de
                            áudio cuidadosamente selecionadas das Escrituras
                            Sagradas. Comece seu dia com sabedoria e paz.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center gap-4 opacity-0 animate-fade-in animate-delay-600">
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
                            <Link
                                href="/#about"
                                className="bg-transparent border-divine-500 text-divine-500 hover:bg-divine-500/10 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 border hover:text-accent-foreground h-11 rounded-md px-8"
                            >
                                Saiba Mais
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 opacity-0 animate-fade-in animate-delay-900 md:justify-items-start md:items-start justify-items-center items-center">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-divine-500" />
                                <span className="text-sm text-gray-600">
                                    Mensagens Diárias
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-divine-500" />
                                <span className="text-sm text-gray-600">
                                    Áudios de Qualidade
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-divine-500" />
                                <span className="text-sm text-gray-600">
                                    Ações Beneficentes
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 max-w-md relative animate-float">
                        <div className="relative backdrop-blur-sm bg-white/60 shadow-lg rounded-2xl border border-white p-6 pb-8">
                            <div className="absolute -top-3 -right-3 bg-divine-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                                MENSAGEM DO DIA
                            </div>
                            <div className="rounded-xl bg-divine-100 p-5 mb-4">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-8 w-8 text-divine-500 mb-2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5.25v13.5M18.75 8.25v7.5M5.25 8.25v7.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="w-full h-1 bg-divine-300 rounded-full mb-2"></div>
                                <div className="w-3/4 h-1 bg-divine-300 rounded-full"></div>
                            </div>
                            <h3 className="font-playfair text-lg font-medium text-divine-700 mb-2">
                                Filipenses 4:13
                            </h3>
                            <p className="text-gray-600 italic">
                                &quot;Tudo posso naquele que me fortalece.&quot;
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-gray-500">
                                        Recebido 07:00
                                    </span>
                                </div>
                                <span className="text-xs text-divine-500">
                                    Audio · 2m
                                </span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 h-40 w-40 bg-divine-100 rounded-lg -z-10 animate-pulse-subtle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
