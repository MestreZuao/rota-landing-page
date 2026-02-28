import React from 'react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const Header = () => {
    return (
        <header className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-gray/50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        {/* Logo da Imersão */}
                        <img
                            className="h-10 w-auto object-contain"
                            src="/elementos-visuais/LOGO-IMERSÃO-ROTA.png"
                            alt="Imersão ROTA"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150x50/020519/ffffff?text=ROTA" }}
                        />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#transformacao" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Transformação</a>
                        <a href="#sobre" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Quem é o Marinho</a>
                        <a href="#agenda" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Cronograma</a>
                        <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-brand-blue text-white font-bold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(30,56,241,0.4)] hover:shadow-[0_0_25px_rgba(30,56,241,0.6)] transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Garantir Minha Vaga
                            </span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
