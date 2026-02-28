import React from 'react';
import { KIWIFY_CHECKOUT_URL } from '../constants';

const StickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-brand-dark border-t border-brand-blue/30 p-4 z-40 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto max-w-md">
                <a
                    href={KIWIFY_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex justify-center items-center w-full bg-brand-blue text-white font-bold text-lg py-4 rounded-lg shadow-[0_0_20px_rgba(30,56,241,0.5)] active:scale-95 transition-all duration-300"
                >
                    <span className="relative z-10">Garantir Minha Vaga</span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                </a>
            </div>
        </div>
    );
};

export default StickyCTA;
