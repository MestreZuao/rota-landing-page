import React from 'react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const About = () => {
    return (
        <section id="sobre" className="py-24 bg-brand-gray relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-brand-blue/30 shadow-[0_0_40px_rgba(30,56,241,0.15)] flex justify-center bg-brand-dark">
                            <img
                                src="/elementos-visuais/FOTO-MARINHO-PNG.png"
                                alt="Marinho Neto"
                                className="w-full max-w-md h-auto object-contain z-10 relative pt-8"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x1000/0a0a0a/1e38f1?text=FOTO+MARINHO+NETO" }}
                            />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,56,241,0.2),transparent_70%)] rounded-2xl"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent p-6 pt-24 text-center z-20">
                                <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">Marinho Neto</h3>
                                <p className="text-brand-muted font-medium text-lg drop-shadow-md">Estrategista e Diretor Comercial</p>
                            </div>
                        </div>


                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Quem será o seu guia</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                            A origem forjada na escassez, escalada pela <span className="text-brand-blue">Alta Performance</span>.
                        </h3>

                        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Vindo do Mocambinho/Teresina, Marinho Neto construiu sua história com base na disciplina e convicção. Com bolsa no Colégio São José, provou sua capacidade sendo aprovado em Medicina e Direito na UFPI.
                            </p>
                            <p>
                                Contudo, fez uma <strong>ruptura por propósito</strong>. Durante o seu sacrifício em BH trabalhando como garçom e barman, refinou a leitura de pessoas. Foi aí que descobriu sua vocação: o mercado de vendas e negociação.
                            </p>
                            <p>
                                Deu um <strong>salto no mercado de alto padrão</strong> em Goiânia, dominando a alta performance e o networking, transicionando para ser um estrategista que entende o cérebro do comprador prime.
                            </p>
                            <p>
                                Em seu retorno estratégico a Teresina, consolidou-se como líder. Hoje, lidera a gestão comercial e o posicionamento de uma construtora com mais de 23 anos de tradição.
                            </p>
                            <p className="text-white font-medium border-l-4 border-brand-blue pl-4 mt-6 py-2">
                                "O que vou te entregar na ROTA não é conteúdo motivacional. É processo, estratégia e rua. É o que eu uso para liderar e vender milhões."
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href={KIWIFY_CHECKOUT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden inline-block bg-brand-blue text-white font-bold text-lg py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(30,56,241,0.5)] hover:shadow-[0_0_30px_rgba(30,56,241,0.7)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Garantir minha vaga na imersão
                                </span>
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
