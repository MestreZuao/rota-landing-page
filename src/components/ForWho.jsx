import React from 'react';
import { Target, TrendingDown, Users, XOctagon, BrainCircuit, SearchX } from 'lucide-react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const forWhoPoints = [
    {
        icon: <SearchX className="w-8 h-8 text-brand-blue" />,
        title: "Não tem um Posicionamento Claro",
        desc: "As pessoas não entendem o seu valor logo de cara e você é visto como 'mais um' no mercado."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-brand-blue" />,
        title: "Vende pelo Preço e não pelo Valor",
        desc: "Cansado de dar desconto e perder vendas para concorrentes piores e mais baratos."
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-brand-blue" />,
        title: "Cria Conteúdo sem Conversão",
        desc: "Tem seguidores, posta todos os dias, mas não sabe transformar atenção em faturamento."
    },
    {
        icon: <Users className="w-8 h-8 text-brand-blue" />,
        title: "Possui um Atendimento Fraco",
        desc: "Atrai clientes interessados, mas não consegue conduzir a negociação para o fechamento."
    },
    {
        icon: <XOctagon className="w-8 h-8 text-brand-blue" />,
        title: "Proposta de Negócios sem Valor Ancorado",
        desc: "Sua oferta parece commodities e os clientes pedem para 'pensar' e logo desaparecem."
    },
    {
        icon: <Target className="w-8 h-8 text-brand-blue" />,
        title: "Falta de Processos de Qualificação",
        desc: "Atende todo mundo igual, perde tempo com curiosos e não foca em quem realmente paga o seu preço."
    }
];

const ForWho = () => {
    return (
        <section id="para-quem" className="py-24 bg-brand-gray border-t border-brand-dark relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        A ROTA é exatamente <span className="text-brand-blue justify-center">para quem</span>:
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Se você se identifica com 2 ou mais itens abaixo, seu processo de vendas está quebrado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {forWhoPoints.map((item, idx) => (
                        <div key={idx} className="bg-brand-dark p-8 rounded-xl border border-gray-800 hover:border-brand-blue/50 transition-colors shadow-lg flex flex-col items-start group">
                            <div className="bg-brand-gray p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <a fill="true"
                        href={KIWIFY_CHECKOUT_URL}
                        target="_blank" rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-brand-blue text-white font-bold text-lg py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(30,56,241,0.5)] hover:shadow-[0_0_30px_rgba(30,56,241,0.7)] hover:-translate-y-1 transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Eu quero mudar essa realidade
                        </span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ForWho;
