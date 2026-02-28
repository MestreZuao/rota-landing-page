import React from 'react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black pt-16 pb-8 border-t border-brand-blue/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">

                    <div className="mb-8 md:mb-0">
                        {/* NOTE: Placeholder para a Logo. Substituir 'logo-marinho.png' pelo arquivo real da pasta elementos-visuais */}
                        <img
                            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                            src="/elementos-visuais/logo.png"
                            alt="Marinho Neto Logo"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/180x60/1f1f1f/cda652?text=MARINHO+NETO" }}
                        />
                        <p className="text-gray-500 mt-4 max-w-sm text-sm">
                            Sua estrutura de posicionamento, oferta e vendas organizada em 3 dias de imersão.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {/* Social Links Placeholders */}
                        <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:text-brand-light hover:bg-gray-800 transition-all">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:text-brand-light hover:bg-gray-800 transition-all">
                            <span className="sr-only">Youtube</span>
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:text-brand-light hover:bg-gray-800 transition-all">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        &copy; {currentYear} Marinho Neto. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-brand-light transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-brand-light transition-colors">Políticas de Privacidade</a>
                    </div>
                </div>

                {/* Espaço extra no final para o Sticky CTA no mobile não cobrir conteúdo importante */}
                <div className="h-16 md:hidden"></div>
            </div>
        </footer>
    );
};

export default Footer;
