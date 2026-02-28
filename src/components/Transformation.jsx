import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const Transformation = () => {
    return (
        <section id="transformacao" className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        A Transformação que a <span className="text-brand-blue">ROTA</span> entrega:
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Em 3 dias de imersão, mudaremos completamente o nível do seu jogo comercial.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
                    {/* Antes */}
                    <div className="bg-red-950/20 border border-red-900/30 p-8 md:p-10 rounded-2xl relative">
                        <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
                            <XCircle className="w-8 h-8" />
                            COMO É HOJE
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-500 mt-1">⨯</span>
                                <span>Vende o mesmo produto comum que todos os outros.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-500 mt-1">⨯</span>
                                <span>Cliente dita as regras e pede para baixar o preço.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-500 mt-1">⨯</span>
                                <span>Usa scripts robóticos que não conectam.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-500 mt-1">⨯</span>
                                <span>Perde negócios após mandar a proposta.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-500 mt-1">⨯</span>
                                <span>Improvisa toda vez que vai apresentar seu produto.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Depois */}
                    <div className="bg-brand-blue/10 border border-brand-blue/40 p-8 md:p-10 rounded-2xl relative shadow-[0_0_30px_rgba(30,56,241,0.15)]">
                        <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8" />
                            APÓS A ROTA
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white">
                                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">Posicionamento Premium e percebido como Produto Único.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white">
                                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">Você dita as regras e o cliente valoriza sua autoridade.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white">
                                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">Conduz a jornada do cliente com fluidez e estratégia.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white">
                                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">Ancora o valor antes do preço; o cliente implora para fechar.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white">
                                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">Pitch de vendas testado, afiado e pronto para converter.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
