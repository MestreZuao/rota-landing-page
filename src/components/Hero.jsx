import React from 'react';
import { KIWIFY_CHECKOUT_URL } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A0A0A] min-h-screen flex flex-col justify-center">

            {/* Imagem Completa de Fundo (CAPA MARINHO) */}
            <div
                className="absolute inset-0 bg-cover bg-center lg:bg-right-top bg-no-repeat pointer-events-none z-0"
                style={{ backgroundImage: "url('/elementos-visuais/CAPA MARINHO.jpg')" }}
            >
                {/* Gradiente escuro para garantir leitura em telas menores */}
                <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">
                <div className="flex flex-col justify-center h-full w-full">

                    {/* Bloco de Texto (Alinhado à Esquerda) */}
                    <div className="w-full lg:w-[45%] xl:w-[40%] text-left mt-8 lg:mt-0">

                        {/* Top Banner / Tagline (Estilo Dark/Premium) */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 lg:mb-10">
                            <img
                                src="/elementos-visuais/LOGO-IMERSÃO-ROTA.png"
                                alt="Imersão ROTA"
                                className="h-8 sm:h-10 w-auto object-contain"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <div className="border-l-[1px] border-white/20 pl-4 sm:pl-5">
                                <p className="text-gray-400 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase mb-0.5">
                                    A Imersão Definitiva
                                </p>
                                <p className="text-white text-xs sm:text-sm font-bold tracking-wider">
                                    100% ONLINE E AO VIVO
                                </p>
                            </div>
                        </div>

                        {/* Título Principal */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight mb-8 leading-[1.05] text-white">
                            Sua estrutura de <br className="hidden md:block" />
                            posicionamento, <br className="hidden md:block" />
                            oferta e vendas <br className="hidden md:block" />
                            em 3 encontros.
                        </h1>

                        {/* Descrição */}
                        <p className="text-base sm:text-lg text-gray-300/90 mb-12 leading-relaxed font-normal max-w-lg">
                            Ao final da Imersão ROTA, você terá seu posicionamento premium definido, sua oferta montada e um sistema de vendas estruturado para parar de brigar por preço.
                        </p>

                        {/* Bloco do CTA (Estilo Dark Glassmorphism com borda Neon) */}
                        <div className="flex flex-col items-center w-full max-w-[380px] bg-[#0A0A0A]/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative">
                            {/* Glow do card */}
                            <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(37,49,233,0.15)] pointer-events-none"></div>

                            <p className="text-xs font-medium text-gray-400 mb-5 tracking-wide w-full text-center relative z-10">
                                Garanta sua participação agora:
                            </p>

                            <a
                                href={KIWIFY_CHECKOUT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full relative overflow-hidden bg-[#0A0A0A] text-white font-bold text-center text-sm sm:text-base py-4 sm:py-5 px-6 rounded-xl border border-[#2531e9] shadow-[0_0_15px_rgba(37,49,233,0.3)] hover:shadow-[0_0_25px_rgba(37,49,233,0.6)] hover:border-[#1e27ba] hover:bg-[#111111] transition-all uppercase tracking-widest hover:-translate-y-0.5 group z-10"
                            >
                                <span className="relative z-10 leading-snug block">GARANTIR MINHA<br />PARTICIPAÇÃO</span>
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            </a>

                            <div className="mt-5 flex items-center justify-center w-full gap-2 text-[10px] sm:text-xs text-gray-500 opacity-90 relative z-10">
                                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                <p>Compra 100% segura e acesso imediato.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
