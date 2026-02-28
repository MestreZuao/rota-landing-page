import React, { useState } from 'react';
import { Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const agendaDays = [
    {
        id: 1,
        title: "DIA 1 — Posicionamento e Estrutura Estratégica",
        subtitle: "Você não vende porque não está posicionado.",
        topics: [
            "Mentalidade de Produto: você é o produto (autoridade vs conteúdo aleatório)",
            "O pior erro: tentar vender antes de estruturar a casa",
            "Business Canvas Pessoal: quem é o cliente, dor, resultado e onde está o dinheiro",
            "Posicionamento Premium: como sair da guerra de preço",
            "Big Idea Pessoal, diferenciação e percepção de imagem"
        ],
        deliverables: "Canvas preenchido + declaração de posicionamento"
    },
    {
        id: 2,
        title: "DIA 2 — Jornada do Cliente e Conversão",
        subtitle: "Autoridade sem conversão é apenas vaidade.",
        topics: [
            "A Jornada Oculta: pré-atendimento, aquecimento e conversa estratégica",
            "Atendimento de Alta Performance: como conduzir e liderar a conversa",
            "Perguntas que VENDEM: o diagnóstico vem antes da proposta",
            "Gerar valor antes de falar o preço: a técnica da ancoragem inquebrável",
            "Estrutura de Oferta: como embalar seu produto com uma transformação clara"
        ],
        deliverables: "Jornada desenhada + estrutura da oferta montada"
    },
    {
        id: 3,
        title: "DIA 3 — Pitch, Checkout e Sistema de Vendas",
        subtitle: "Se você não sabe apresentar, você não vende.",
        topics: [
            "O Pitch Magnético: dor, consequência, mecanismo, prova e oferta",
            "Versões do Pitch: 3 minutos, para reuniões e para stories (curto)",
            "Sistema de Vendas Simplificado: como organizar leads e controlar conversas",
            "Follow-up e CRM Básico que coloca dinheiro no seu bolso",
            "Checkout, Objeções e Monetização: como cobrar, como fechar e criar recorrência"
        ],
        deliverables: "Pitch escrito + plano de ação 30 dias"
    }
];

const Agenda = () => {
    const [openDay, setOpenDay] = useState(1);

    return (
        <section id="agenda" className="py-24 bg-brand-dark border-t border-brand-gray relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        O que acontece em cada dia da <span className="text-brand-blue">ROTA</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">
                        A imersão conta com 3 encontros online diretos ao ponto, com teoria premium e muita prática.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {agendaDays.map((day) => (
                        <div
                            key={day.id}
                            className={`border ${openDay === day.id ? 'border-brand-blue' : 'border-gray-800'} rounded-xl overflow-hidden transition-colors bg-brand-gray`}
                        >
                            <button
                                onClick={() => setOpenDay(openDay === day.id ? 0 : day.id)}
                                className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${openDay === day.id ? 'bg-brand-blue text-white' : 'bg-brand-dark text-white'}`}>
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-xl md:text-2xl ${openDay === day.id ? 'text-brand-blue' : 'text-white'}`}>
                                            {day.title}
                                        </h3>
                                        <p className="text-gray-400 mt-1">{day.subtitle}</p>
                                    </div>
                                </div>
                                {openDay === day.id ? <ChevronUp className="w-6 h-6 text-brand-blue" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openDay === day.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <div className="p-6 md:p-8 pt-0 border-t border-gray-800">
                                    <ul className="space-y-4 mb-8">
                                        {day.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-brand-dark p-5 rounded-lg border border-brand-blue/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div>
                                            <span className="text-brand-blue font-bold text-sm tracking-wider uppercase">Entregável do Dia:</span>
                                            <p className="text-white font-medium mt-1">{day.deliverables}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a fill="true"
                        href={KIWIFY_CHECKOUT_URL}
                        target="_blank" rel="noopener noreferrer"
                        className="group relative overflow-hidden inline-block bg-brand-blue text-white font-bold text-lg py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(30,56,241,0.5)] hover:shadow-[0_0_30px_rgba(30,56,241,0.7)] hover:-translate-y-1 transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Reservar Menos de 50 Vagas Restantes
                        </span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
