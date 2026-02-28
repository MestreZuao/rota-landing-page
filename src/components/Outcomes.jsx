import React from 'react';
import { Award, Briefcase, FileSignature, Map, Presentation, ServerCog, Target } from 'lucide-react';

const outcomes = [
    { icon: <Target className="text-brand-blue w-6 h-6" />, title: "Posicionamento definido", text: "Sabendo exatamente o lugar que você ocupa na mente do cliente." },
    { icon: <Map className="text-brand-blue w-6 h-6" />, title: "Business model organizado", text: "Modelo de negócio claro sobre quem você atende e o que entrega." },
    { icon: <Briefcase className="text-brand-blue w-6 h-6" />, title: "Jornada do cliente", text: "Mapa de todos os pontos de contato para gerar experiência premium." },
    { icon: <Award className="text-brand-blue w-6 h-6" />, title: "Oferta montada", text: "Pacote de transformação embalado, precificado e ancorado." },
    { icon: <Presentation className="text-brand-blue w-6 h-6" />, title: "Pitch pronto", text: "Discurso afiado de 3 minutos para você nunca mais travar ao falar do produto." },
    { icon: <ServerCog className="text-brand-blue w-6 h-6" />, title: "Sistema básico de vendas", text: "Processo claro para gerenciar leads, qualificar e fechar com CRM." },
    { icon: <FileSignature className="text-brand-blue w-6 h-6" />, title: "Plano de ação de 30 dias", text: "Você não sai perdido, sai com metas para executar no próximo mês." }
];

const Outcomes = () => {
    return (
        <section className="py-24 bg-brand-gray border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        O que você leva com você ao final
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Essa não é uma imersão teórica onde você sai cheio de ideias e vazio de execução. Você sai com estrutura montada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {outcomes.map((item, idx) => (
                        <div key={idx} className="bg-brand-dark p-6 rounded-xl border border-gray-800 hover:border-brand-blue/40 transition-colors flex items-start gap-4">
                            <div className="bg-brand-gray p-3 rounded-lg flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Outcomes;
