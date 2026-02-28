import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const faqs = [
    {
        q: "A imersão será ao vivo ou gravada?",
        a: "A imersão conta com 3 encontros 100% online e ao vivo, garantindo interação e tira-dúvidas em tempo real."
    },
    {
        q: "Para quem é essa imersão?",
        a: "Para empreendedores, corretores, consultores e prestadores de serviço que querem estruturar seu posicionamento, criar uma oferta premium e parar de brigar por preço."
    },
    {
        q: "Sou iniciante, a ROTA serve para mim?",
        a: "Totalmente. A metodologia foi desenhada para te dar o passo a passo exato desde o nivelamento do seu posicionamento até o pitch de vendas."
    },
    {
        q: "Como receberei o acesso?",
        a: "Após a confirmação do pagamento na Kiwify, você receberá um e-mail com todas as instruções e o link exclusivo de acesso aos encontros."
    },
    {
        q: "Terei suporte em caso de dúvidas?",
        a: "Sim, durante as sessões ao vivo teremos momentos dedicados para perguntas e respostas diretamente com o Marinho Neto."
    },
    {
        q: "Quais são as formas de pagamento?",
        a: "Você pode pagar via PIX (liberação imediata), Boleto ou Cartão de Crédito parcelado."
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-brand-gray border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <MessageCircleQuestion className="w-12 h-12 text-brand-blue mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Tem alguma dúvida? As respostas que você precisa estão aqui.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border ${openIndex === idx ? 'border-brand-blue bg-brand-dark' : 'border-gray-800 bg-brand-dark/50 hover:bg-brand-dark'} rounded-xl overflow-hidden transition-colors`}
                        >
                            <button
                                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                            >
                                <div className="flex gap-4 items-center">
                                    <span className={`font-bold ${openIndex === idx ? 'text-brand-blue' : 'text-gray-500'}`}>{(idx + 1).toString().padStart(2, '0')}.</span>
                                    <span className={`font-bold text-lg md:text-xl ${openIndex === idx ? 'text-white' : 'text-gray-300'}`}>
                                        {faq.q}
                                    </span>
                                </div>
                                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-blue' : 'text-gray-500'}`} />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out px-6 ${openIndex === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden pb-0'
                                    }`}
                            >
                                <div className="pl-9 text-gray-400 leading-relaxed pt-2 border-t border-gray-800/50">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-brand-dark p-8 rounded-xl border border-gray-800 flex flex-col items-center">
                    <a
                        href={KIWIFY_CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-brand-blue text-white font-bold text-lg py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(30,56,241,0.5)] hover:shadow-[0_0_30px_rgba(30,56,241,0.7)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Garantir Minha Vaga Mesmo Assim
                        </span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
