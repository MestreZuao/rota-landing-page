import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const Pricing = () => {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray/50 border border-brand-blue/40 text-brand-blue text-sm font-bold uppercase tracking-widest mb-6">
                        <Zap className="w-4 h-4" /> Oferta Especial
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-light leading-tight">
                        A chave definitiva para parar de <span className="text-brand-blue drop-shadow-[0_0_10px_rgba(37,49,233,0.5)]">perder dinheiro</span>.
                    </h2>
                    <p className="text-gray-300 text-lg">
                        3 encontros. Metodologia de rua. O passo a passo completo.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-brand-gray/30 border border-brand-blue/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(37,49,233,0.15)] relative backdrop-blur-sm">

                        {/* Ribbon */}
                        <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-5 py-1.5 rounded-bl-lg tracking-wider">
                            VAGAS LIMITADAS
                        </div>

                        <div className="flex flex-col lg:flex-row">
                            {/* Left Column: Features */}
                            <div className="p-8 md:p-12 lg:w-3/5 border-b lg:border-b-0 lg:border-r border-brand-blue/20">
                                <h3 className="text-2xl font-bold text-brand-light mb-2">Imersão ROTA Completa</h3>
                                <p className="text-gray-400 mb-8">Tudo o que você precisa para alinhar seu posicionamento e dobrar a conversão.</p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-brand-blue/20 p-1 rounded-full text-brand-blue mt-1">
                                            <Check className="w-4 h-4 font-bold" />
                                        </div>
                                        <span className="text-gray-300 font-medium">3 Encontros 100% Online e Ao Vivo</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-brand-blue/20 p-1 rounded-full text-brand-blue mt-1">
                                            <Check className="w-4 h-4 font-bold" />
                                        </div>
                                        <span className="text-gray-300 font-medium">Declaração de Posicionamento Premium</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-brand-blue/20 p-1 rounded-full text-brand-blue mt-1">
                                            <Check className="w-4 h-4 font-bold" />
                                        </div>
                                        <span className="text-gray-300 font-medium">Mapeamento da Jornada do Cliente</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-brand-blue/20 p-1 rounded-full text-brand-blue mt-1">
                                            <Check className="w-4 h-4 font-bold" />
                                        </div>
                                        <span className="text-gray-300 font-medium">Estrutura de Oferta Irresistível</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-brand-blue/20 p-1 rounded-full text-brand-blue mt-1">
                                            <Check className="w-4 h-4 font-bold" />
                                        </div>
                                        <span className="text-gray-300 font-medium">Framework de Pitch de Vendas Testado</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Column: Price and CTA */}
                            <div className="p-8 md:p-12 lg:w-2/5 flex flex-col justify-center items-center bg-brand-dark/50 text-center relative border-l border-brand-blue/10">
                                <p className="text-gray-400 mb-2 font-medium uppercase tracking-widest text-sm">Investimento Único</p>

                                <div className="mb-2 line-through text-red-400/80 font-bold text-xl">
                                    de R$ 497,00
                                </div>

                                <div className="flex items-baseline justify-center gap-1 mb-6">
                                    <span className="text-3xl font-bold text-brand-blue">por</span>
                                    <span className="text-3xl font-bold text-brand-light ml-2">R$</span>
                                    <span className="text-6xl font-extrabold text-brand-light tracking-tight">100</span>
                                </div>

                                <a
                                    href={KIWIFY_CHECKOUT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full relative overflow-hidden bg-brand-dark text-white font-bold text-center text-sm md:text-base py-4 px-6 rounded-xl border border-brand-blue shadow-[0_0_15px_rgba(37,49,233,0.3)] hover:shadow-[0_0_25px_rgba(37,49,233,0.6)] hover:border-brand-blueHover hover:bg-brand-gray transition-all uppercase tracking-widest hover:-translate-y-0.5 group z-10"
                                >
                                    <span className="relative z-10 leading-snug block">QUERO ENTRAR NA<br />ROTA</span>
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                </a>

                                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                    <span>Compra 100% Segura pela Kiwify</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
