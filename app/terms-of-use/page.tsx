import React from "react";

export const metadata = {
    title: "Termos de Uso | Audivino",
    description:
        "Termos e condições completos do Audivino. Informações sobre assinaturas, direitos, privacidade e uso do serviço de mensagens bíblicas diárias via WhatsApp. Leia antes de usar nosso serviço.",
    keywords:
        "termos de uso, Audivino, mensagens bíblicas, WhatsApp, Catapio, termos e condições",
    robots: "index, follow",
    alternates: {
        canonical: "https://audivino.catap.io/terms-of-use",
    },
    openGraph: {
        title: "Termos de Uso | Audivino",
        description:
            "Termos e condições completos do Audivino. Informações sobre assinaturas, direitos, privacidade e uso do serviço de mensagens bíblicas diárias via WhatsApp. Leia antes de usar nosso serviço.",
        url: "https://audivino.catap.io/terms-of-use",
        siteName: "Audivino",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://audivino.catap.io/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Audivino - Mensagens bíblicas diárias",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Termos de Uso | Audivino",
        description:
            "Termos e condições completos do Audivino. Informações sobre assinaturas, direitos, privacidade e uso do serviço de mensagens bíblicas diárias via WhatsApp. Leia antes de usar nosso serviço.",
        images: ["https://audivino.catap.io/twitter-image.jpg"],
    },
};

export default function TermsOfUsePage() {
    return (
        <div className="min-h-screen flex flex-col text-left">
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">
                            Termos de Uso
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="mb-6">
                                Última atualização:{" "}
                                {new Date(
                                    "2025-03-16T03:00:00Z"
                                ).toLocaleDateString("pt-BR")}
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                1. Introdução
                            </h2>
                            <p className="mb-4">
                                Bem-vindo ao Audivino, um serviço desenvolvido e
                                operado pela{" "}
                                <a
                                    href="https://catap.io"
                                    className="text-divine-500 hover:underline"
                                >
                                    Catapio
                                </a>{" "}
                                que oferece mensagens bíblicas diárias via
                                WhatsApp. Estes Termos de Uso regem o acesso e
                                uso do serviço Audivino, incluindo seu website,
                                conteúdo, funcionalidades e aplicações
                                (coletivamente denominados
                                &ldquo;Serviço&rdquo;).
                            </p>
                            <p className="mb-6">
                                Ao usar o Serviço, você concorda com estes
                                Termos. Por favor, leia-os atentamente. Se não
                                concordar com qualquer parte destes Termos, você
                                não deverá utilizar o Serviço.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                2. Descrição do Serviço
                            </h2>
                            <p className="mb-6">
                                O Audivino é um serviço que fornece mensagens
                                bíblicas diárias em formato de áudio através do
                                WhatsApp. Nosso objetivo é levar inspiração
                                espiritual, reflexão e sabedoria através de
                                conteúdo bíblico cuidadosamente selecionado e
                                narrado profissionalmente.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                3. Elegibilidade e Registro
                            </h2>
                            <h3 className="text-xl font-semibold mt-6 mb-3">
                                3.1. Requisitos de Elegibilidade
                            </h3>
                            <p className="mb-4">
                                Para utilizar o Serviço, você deve:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="mb-2">
                                    Ter pelo menos 18 anos de idade ou a
                                    maioridade legal em sua jurisdição
                                </li>
                                <li className="mb-2">
                                    Possuir uma conta ativa no WhatsApp
                                </li>
                                <li className="mb-2">
                                    Manter suas informações de contato
                                    atualizadas
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-3">
                                3.2. Processo de Registro
                            </h3>
                            <p className="mb-4">Ao assinar um plano:</p>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="mb-2">
                                    O número de telefone e o nome presentes na
                                    sua conta do WhatsApp serão utilizados para
                                    identificá-lo em nossa plataforma
                                </li>
                                <li className="mb-2">
                                    Não é necessário criar uma senha adicional,
                                    pois a autenticação ocorre via WhatsApp
                                </li>
                                <li className="mb-2">
                                    Você concorda em receber mensagens diárias
                                    ou sermanais de texto e áudio através do
                                    WhatsApp
                                </li>
                            </ul>
                            <p className="mb-6">
                                Você é responsável por manter a
                                confidencialidade de suas informações de acesso
                                e por todas as atividades que ocorrem em sua
                                conta.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                4. Assinatura e Pagamento
                            </h2>
                            <p className="mb-4">
                                <strong>4.1. Planos de Assinatura:</strong> O
                                Audivino oferece serviços mediante assinatura
                                paga. Os detalhes dos planos disponíveis e seus
                                respectivos preços são apresentados no momento
                                da inscrição.
                            </p>
                            <p className="mb-4">
                                <strong>4.2. Renovação Automática:</strong>{" "}
                                Salvo indicação em contrário, as assinaturas são
                                renovadas automaticamente ao final de cada
                                período, até que você cancele.
                            </p>
                            <p className="mb-4">
                                <strong>4.3. Cancelamento:</strong> Você pode
                                cancelar sua assinatura a qualquer momento. O
                                cancelamento entrará em vigor ao final do
                                período atual de faturamento.
                            </p>
                            <p className="mb-4">
                                <strong>4.4. Alterações nos Preços:</strong>{" "}
                                Podemos alterar nossos preços a qualquer
                                momento, mas sempre notificaremos você com
                                antecedência.
                            </p>
                            <p className="mb-6">
                                Os pagamentos das assinaturas são realizados
                                através do Stripe. Ao fornecer suas informações
                                de pagamento, você concorda com os termos e
                                políticas do Stripe. Não armazenamos dados de
                                pagamento em nossos servidores.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                5. Ações Beneficentes
                            </h2>
                            <p className="mb-6">
                                Parte do valor das assinaturas é destinada a
                                projetos sociais e de caridade. Ao assinar nosso
                                serviço, você está contribuindo para essas
                                iniciativas. Comprometemo-nos a ser
                                transparentes sobre o uso desses recursos e as
                                ações beneficentes apoiadas.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                6. Conteúdo e Propriedade Intelectual
                            </h2>
                            <p className="mb-4">
                                <strong>6.1. Conteúdo Gerado por IA:</strong> Os
                                áudios e textos disponibilizados através do
                                Serviço são produzidos utilizando tecnologias de
                                Inteligência Artificial (IA). Embora o conteúdo
                                seja gerado por sistemas de IA, a configuração,
                                seleção, curadoria e distribuição desse conteúdo
                                são realizadas por nossa equipe.
                            </p>
                            <p className="mb-4">
                                <strong>6.2. Propriedade do Conteúdo:</strong>{" "}
                                Todo o conteúdo disponibilizado através do
                                Serviço, incluindo textos bíblicos, comentários,
                                narrações, gravações de áudio gerados por IA e
                                elementos visuais, é de propriedade do Audivino
                                ou devidamente licenciado, sendo protegido por
                                direitos autorais e outras leis de propriedade
                                intelectual, na medida permitida pela legislação
                                aplicável para conteúdos gerados por IA.
                            </p>
                            <p className="mb-4">
                                <strong>6.3. Uso Permitido:</strong> Você pode
                                utilizar o conteúdo apenas para uso pessoal e
                                não comercial. Não é permitido modificar,
                                reproduzir, distribuir ou criar obras derivadas
                                do nosso conteúdo sem autorização prévia por
                                escrito.
                            </p>
                            <p className="mb-4">
                                <strong>6.4. Conteúdo Bíblico:</strong>{" "}
                                Reconhecemos que os textos bíblicos em si são de
                                domínio público, mas nossas seleções,
                                combinações, apresentações e as interpretações
                                geradas com auxílio de IA são protegidos por
                                direitos autorais, conforme aplicável.
                            </p>
                            <p className="mb-6">
                                <strong>
                                    6.5. Limitações do Conteúdo Gerado por IA:
                                </strong>{" "}
                                Reconhecemos que tecnologias de IA possuem
                                limitações e podem ocasionalmente produzir
                                conteúdo impreciso ou inadequado. Fazemos nosso
                                melhor para revisar e garantir a qualidade do
                                conteúdo, mas não podemos garantir sua total
                                precisão teológica ou ausência de erros.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                7. Responsabilidades do Usuário
                            </h2>
                            <p className="mb-4">
                                Ao utilizar o Serviço, você concorda em:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="mb-2">
                                    Não utilizar o Serviço para qualquer
                                    finalidade ilegal ou não autorizada
                                </li>
                                <li className="mb-2">
                                    Não tentar acessar áreas restritas do
                                    Serviço
                                </li>
                                <li className="mb-2">
                                    Não interferir com o Serviço ou
                                    servidores/redes conectados ao Serviço
                                </li>
                                <li className="mb-2">
                                    Não utilizar o conteúdo para fins comerciais
                                </li>
                                <li className="mb-2">
                                    Tratar outros membros da comunidade com
                                    respeito
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                8. Privacidade
                            </h2>
                            <h3 className="text-xl font-semibold mt-6 mb-3">
                                8.1. Coleta de Dados
                            </h3>
                            <p className="mb-4">
                                Durante o uso do nosso Serviço, coletamos as
                                seguintes informações:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="mb-2">
                                    Seu número de telefone e nome de perfil do
                                    WhatsApp
                                </li>
                                <li className="mb-2">
                                    Registros de interação com as mensagens
                                    enviadas
                                </li>
                                <li className="mb-2">
                                    Dados de pagamento para processamento das
                                    assinaturas através do Stripe
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-3">
                                8.2. Uso de Dados
                            </h3>
                            <p className="mb-4">
                                Os dados coletados são utilizados para:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="mb-2">
                                    Identificá-lo e personalizar sua experiência
                                </li>
                                <li className="mb-2">
                                    Processar pagamentos e renovações de
                                    assinatura através do Stripe
                                </li>
                                <li className="mb-2">
                                    Melhorar nosso Serviço e a qualidade do
                                    conteúdo
                                </li>
                                <li className="mb-2">
                                    Comunicar informações importantes sobre o
                                    Serviço
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-3">
                                8.3. Política de Privacidade
                            </h3>
                            <p className="mb-6">
                                Nossa{" "}
                                <a
                                    href="https://catap.io/privacy-policy"
                                    className="text-divine-500 hover:underline"
                                >
                                    Política de Privacidade
                                </a>{" "}
                                completa está disponível em{" "}
                                <a
                                    href="https://catap.io/privacy-policy"
                                    className="text-divine-500 hover:underline"
                                >
                                    https://catap.io/privacy-policy
                                </a>{" "}
                                e descreve detalhadamente como coletamos, usamos
                                e protegemos suas informações pessoais. Ao
                                utilizar o Serviço, você concorda com nossa
                                Política de Privacidade.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                9. Limitações do Serviço
                            </h2>
                            <p className="mb-4">
                                <strong>9.1. Disponibilidade:</strong> Embora
                                nos esforcemos para garantir a disponibilidade
                                contínua do Serviço, não podemos garantir que
                                ele estará disponível ininterruptamente ou livre
                                de erros.
                            </p>
                            <p className="mb-4">
                                <strong>9.2. Dependência de Terceiros:</strong>{" "}
                                O Serviço depende do WhatsApp para entrega das
                                mensagens. Não nos responsabilizamos por falhas
                                causadas por problemas no WhatsApp ou outros
                                serviços de terceiros.
                            </p>
                            <p className="mb-6">
                                <strong>9.3. Alterações no Serviço:</strong>{" "}
                                Reservamo-nos o direito de modificar ou
                                descontinuar, temporária ou permanentemente, o
                                Serviço (ou qualquer parte dele) com ou sem
                                aviso prévio.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                10. Isenção de Garantias
                            </h2>
                            <p className="mb-6 font-medium">
                                O SERVIÇO É FORNECIDO &ldquo;COMO ESTÁ&rdquo; E
                                &ldquo;CONFORME DISPONÍVEL&rdquo;, SEM GARANTIAS
                                DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                11. Limitação de Responsabilidade
                            </h2>
                            <p className="mb-6 font-medium">
                                EM NENHUMA CIRCUNSTÂNCIA SEREMOS RESPONSÁVEIS
                                POR DANOS DIRETOS, INDIRETOS, INCIDENTAIS,
                                ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS
                                RESULTANTES DO USO OU INCAPACIDADE DE USO DO
                                SERVIÇO.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                12. Interpretação Espiritual
                            </h2>
                            <p className="mb-6">
                                As interpretações bíblicas e espirituais
                                apresentadas no Serviço refletem uma perspectiva
                                particular da fé cristã. Respeitamos a
                                diversidade de crenças e entendemos que
                                interpretações espirituais podem variar. As
                                mensagens são oferecidas para reflexão e
                                inspiração, não como doutrina definitiva.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                13. Rescisão
                            </h2>
                            <p className="mb-6">
                                Podemos encerrar ou suspender seu acesso ao
                                Serviço imediatamente, sem aviso prévio ou
                                responsabilidade, por qualquer motivo,
                                incluindo, sem limitação, a violação destes
                                Termos.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                14. Alterações nos Termos
                            </h2>
                            <p className="mb-6">
                                Podemos revisar estes Termos a qualquer momento,
                                a nosso critério exclusivo. As alterações
                                entrarão em vigor imediatamente após a
                                publicação dos Termos revisados. O uso
                                continuado do Serviço após tais alterações
                                constitui sua aceitação dos novos Termos.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                15. Lei Aplicável
                            </h2>
                            <p className="mb-6">
                                Estes Termos serão regidos e interpretados de
                                acordo com as leis do Brasil, independentemente
                                de seus conflitos de princípios legais.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                16. Contato
                            </h2>
                            <p className="mb-6">
                                Se você tiver dúvidas sobre estes Termos ou
                                sobre o Serviço, entre em contato com a Catapio
                                através do{" "}
                                <a
                                    href="https://catap.io/#contact"
                                    className="text-divine-500 hover:underline"
                                >
                                    formulário de contato
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
