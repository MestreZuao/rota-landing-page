import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ForWho from './components/ForWho';
import Transformation from './components/Transformation';
import About from './components/About';
import Agenda from './components/Agenda';
import Outcomes from './components/Outcomes';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
    // Configuração simples para garantir acessibilidade
    useEffect(() => {
        document.documentElement.lang = 'pt-BR';
        document.title = 'ROTA | Imersão ao vivo com Marinho Neto';
    }, []);

    return (
        <div className="min-h-screen bg-brand-dark text-brand-light font-sans antialiased overflow-x-hidden">

            <Header />

            <main>
                <Hero />
                <ForWho />
                <Transformation />
                <About />
                <Agenda />
                <Outcomes />
                <Pricing />
                <FAQ />
            </main>

            <Footer />

            {/* CTA Fixo no Mobile para aumentar conversão */}
            <StickyCTA />

        </div>
    );
}

export default App;
