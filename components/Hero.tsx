import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero = ({ onGetStartedClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-divine-100/40 to-white z-0"></div>

      {/* Background elements */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-divine-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-divine-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <Badge className="mb-4 bg-divine-500/10 text-divine-600 hover:bg-divine-500/20 backdrop-blur-sm animate-fade-in px-3 py-1.5">
              Palavra Divina Todo Dia
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-divine-700 animate-fade-in">
              Mensagens Bíblicas Diárias
              <span className="text-divine-500"> via WhatsApp</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 animate-fade-in animate-delay-300">
              Receba inspiração diária através de mensagens de áudio cuidadosamente selecionadas das Escrituras Sagradas. Comece seu dia com sabedoria e paz.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center gap-4 animate-fade-in animate-delay-600">
              <Button onClick={onGetStartedClick} size="lg" className="bg-divine-500 hover:bg-divine-600 text-white">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-divine-500 text-divine-500 hover:bg-divine-500/10">
                Saiba Mais
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in animate-delay-900 md:justify-items-start md:items-start justify-items-center items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-divine-500" />
                <span className="text-sm text-gray-600">Mensagens Diárias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-divine-500" />
                <span className="text-sm text-gray-600">Áudios de Qualidade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-divine-500" />
                <span className="text-sm text-gray-600">Ações Beneficentes</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md relative animate-float">
            <div className="relative backdrop-blur-sm bg-white/60 shadow-lg rounded-2xl border border-white p-6 pb-8">
              <div className="absolute -top-3 -right-3 bg-divine-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                MENSAGEM DO DIA
              </div>
              <div className="rounded-xl bg-divine-100 p-5 mb-4">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-divine-500 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5.25v13.5M18.75 8.25v7.5M5.25 8.25v7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="w-full h-1 bg-divine-300 rounded-full mb-2"></div>
                <div className="w-3/4 h-1 bg-divine-300 rounded-full"></div>
              </div>
              <h3 className="font-playfair text-lg font-medium text-divine-700 mb-2">Filipenses 4:13</h3>
              <p className="text-gray-600 italic">&quot;Tudo posso naquele que me fortalece.&quot;</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">Recebido 07:00</span>
                </div>
                <span className="text-xs text-divine-500">Audio · 2m</span>
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
