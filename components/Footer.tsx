import constants from "@/constants";
import { Book, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-divine-700 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Book className="h-6 w-6 text-divine-300" />
                            <span className="font-playfair text-lg font-medium text-white">
                                {constants.platform_name}
                            </span>
                        </div>
                        <p className="text-divine-200 text-sm mb-6 text-left">
                            Levando inspiração diária através de mensagens
                            bíblicas em áudio para transformar vidas.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#about"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#features"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#pricing"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Planos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Recursos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/terms-of-use"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://catap.io/privacyPolicy"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contato</h3>
                        <ul className="space-y-2 flex justify-center flex-col items-center">
                            <li className="flex items-start gap-2">
                                <a
                                    href="https://catap.io/#contact"
                                    className="text-divine-200 hover:text-white transition-colors"
                                >
                                    Entre em contato
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-divine-300 mt-0.5" />
                                <span className="text-divine-200">
                                    {constants.contact.address}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-divine-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-divine-300 text-sm">
                        &copy; {new Date().getFullYear()}{" "}
                        <a
                            href="https://catap.io"
                            className="text-divine-200 hover:text-white transition-colors"
                        >
                            Catapio
                        </a>
                        . Todos os direitos reservados.
                    </p>
                    <p className="text-divine-300 text-sm">
                        Desenvolvido com ♥ por{" "}
                        <a
                            href="https://catap.io"
                            className="text-divine-200 hover:text-white transition-colors"
                        >
                            Catapio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
