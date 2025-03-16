"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { CircleCheck, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Stripe from "stripe";
import { getCheckoutSession } from "./actions/get-checkout-session";

const Success = () => {
    const searchParams = useSearchParams();
    const planType = searchParams.get("plan") || "básico";
    const [countdown, setCountdown] = useState(10);
    const [, setSessionData] = useState<Stripe.Checkout.Session | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        async function fetchSessionData() { 
            const sessionId = searchParams.get("session_id");
            if (typeof sessionId !== "string") {
                return;
            }
            const session = await getCheckoutSession(sessionId);
            setSessionData(session);
        }
        fetchSessionData();
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-divine-50 to-white flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-divine-500 p-6 text-white text-center">
                    <CircleCheck className="h-20 w-20 mx-auto mb-4 text-white animate-bounce-slow" />
                    <h1 className="text-3xl font-bold">Pagamento Confirmado!</h1>
                    <p className="mt-2 opacity-90">Sua assinatura foi ativada com sucesso</p>
                </div>

                <div className="p-6 md:p-8">
                    <div className="glass-card rounded-xl p-4 mb-6 bg-divine-50/50">
                        <h2 className="text-xl font-semibold text-divine-700 mb-2">
                            Plano {planType.charAt(0).toUpperCase() + planType.slice(1)}
                        </h2>
                        <p className="text-gray-600">
                            Seu plano está ativo e você começará a receber mensagens espirituais diárias via WhatsApp a partir de amanhã.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-divine-100 p-1 rounded-full">
                                <ArrowRight className="h-4 w-4 text-divine-600" />
                            </div>
                            <p className="text-gray-600 text-sm">Configure suas preferências no seu painel de controle para personalizar sua experiência.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-divine-100 p-1 rounded-full">
                                <ArrowRight className="h-4 w-4 text-divine-600" />
                            </div>
                            <p className="text-gray-600 text-sm">Uma porcentagem de sua assinatura será destinada a projetos de caridade. Agradecemos sua contribuição!</p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        <Button asChild className="w-full bg-divine-500 hover:bg-divine-600">
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" /> Voltar para Página Inicial
                            </Link>
                        </Button>

                        <Link href="/dashboard" className="text-divine-600 hover:text-divine-700 text-center text-sm font-medium">
                            Acessar meu Painel de Controle
                        </Link>
                    </div>

                    {countdown > 0 && (
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Redirecionando em {countdown} segundos...
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-8 text-center max-w-md">
                <h3 className="text-lg font-semibold text-divine-700 mb-2">Apoie Nossa Missão</h3>
                <p className="text-gray-600 text-sm">
                    Cada assinatura ajuda a levar conforto espiritual para mais pessoas e apoiar causas beneficentes. Compartilhe este serviço com amigos e familiares.
                </p>
            </div>
        </div>
    );
};
export default function SuccessWrapped() {
    return (
        <Suspense>
            <Success />
        </Suspense>
    );
}
