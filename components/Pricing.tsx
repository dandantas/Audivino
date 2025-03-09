
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingProps {
  onGetStartedClick: (priceType: "basic" | "premium") => void;
}

const Pricing = ({ onGetStartedClick }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-divine-100/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-divine-300/40 text-divine-600 rounded-full text-sm font-medium mb-4">
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-divine-700 mb-6">
            Escolha o Plano Ideal Para Sua Jornada Espiritual
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos opções que se adaptam às suas necessidades, com recursos exclusivos
            e a possibilidade de contribuir para causas beneficentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-divine-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-slide-in-left">
            <div className="bg-divine-100 p-6">
              <h3 className="text-2xl font-bold text-divine-700">Plano Básico</h3>
              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-divine-700">R$19,90</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                Mensagens diárias inspiradoras com configurações essenciais.
              </p>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">1 mensagem diária via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Escolha entre 3 horários de envio</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">2 vozes de narração disponíveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Biblioteca com mensagens anteriores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">20% da assinatura para caridade</span>
                </li>
              </ul>

              <Button onClick={() => onGetStartedClick("basic")} className="w-full mt-6 bg-divine-500 hover:bg-divine-600 text-white">
                Começar com Básico
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-divine-500 rounded-2xl overflow-hidden shadow-lg relative animate-slide-in-right">
            <Badge className="absolute top-4 right-4 bg-divine-500 text-white">Recomendado</Badge>

            <div className="bg-divine-500/10 p-6">
              <h3 className="text-2xl font-bold text-divine-700">Plano Premium</h3>
              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-divine-700">R$39,90</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                Experiência completa com personalização avançada e conteúdo exclusivo.
              </p>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Até 3 mensagens diárias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Personalização completa de horários</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">8 vozes de narração disponíveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Músicas de fundo personalizáveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Biblioteca exclusiva de conteúdo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">Escolha dos temas de mensagens</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-divine-500 mt-0.5" />
                  <span className="text-gray-600">40% da assinatura para caridade</span>
                </li>
              </ul>

              <Button onClick={() => onGetStartedClick("premium")} className="w-full mt-6 bg-divine-500 hover:bg-divine-600 text-white">
                Começar com Premium
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-divine-100 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-divine-700 mb-3">Compromisso Social</h3>
          <p className="text-gray-600">
            Uma porcentagem de cada assinatura é destinada a projetos sociais e obras de caridade.
            Juntos, podemos fazer a diferença enquanto nutrimos nossa fé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
