"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cancel = () => {
  const [countdown, setCountdown] = useState(15);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-rose-600 p-6 text-white text-center">
          <AlertCircle className="h-20 w-20 mx-auto mb-4 text-white animate-pulse" />
          <h1 className="text-3xl font-bold">Pagamento não Concluído</h1>
          <p className="mt-2 opacity-90">Encontramos um problema ao processar seu pagamento</p>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="rounded-xl p-4 mb-6 bg-rose-50/50 border border-rose-100">
            <h2 className="text-xl font-semibold text-rose-700 mb-2">
              O que pode ter acontecido?
            </h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>Problemas com o cartão de crédito ou dados bancários</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>Saldo insuficiente ou limite excedido</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>Conexão interrompida durante o processo</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>Problema temporário com o processador de pagamento</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 flex flex-col gap-4">
            <Button asChild className="w-full bg-divine-500 hover:bg-divine-600">
              <Link href="#pricing">
                <RefreshCw className="mr-2 h-4 w-4" /> Tentar Novamente
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full border-divine-200 text-divine-700">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Voltar para Página Inicial
              </Link>
            </Button>
            
            <Link href="/contact" className="text-divine-600 hover:text-divine-700 text-center text-sm font-medium">
              Precisa de ajuda? Entre em contato
            </Link>
          </div>
          
          {countdown > 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Redirecionando para a página inicial em {countdown} segundos...
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-center max-w-md">
        <h3 className="text-lg font-semibold text-divine-700 mb-2">Estamos Aqui Para Ajudar</h3>
        <p className="text-gray-600 text-sm">
          Se você continuar tendo problemas com o pagamento, nossa equipe de suporte está disponível 
          para auxiliá-lo. Entre em contato pelo WhatsApp ou email.
        </p>
      </div>
    </div>
  );
};

export default Cancel;
