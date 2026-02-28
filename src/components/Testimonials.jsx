import React from 'react';
import { Quote } from 'lucide-react';

// Se não houver depoimentos inicialmente, esses são placeholders que podem ser trocados depois.
const testimonials = [
  {
    name: "Placeholder Nome 1",
    role: "Corretor de Alto Padrão",
    text: "Esse espaço está reservado para um depoimento real. A clareza que apliquei no meu posicionamento me fez fechar 3 imóveis que estavam parados há meses. A técnica de ancoragem muda o jogo.",
    image: "https://via.placeholder.com/150/1f1f1f/cda652?text=FOTO"
  },
  {
    name: "Placeholder Nome 2",
    role: "Empreendedor Escala",
    text: "Com a estrutura de oferta pronta, parei de vender commodity. O cliente hoje percebe o valor antes de eu dar o preço. A mudança na percepção é brutal, e o faturamento seguiu junto.",
    image: "https://via.placeholder.com/150/1f1f1f/cda652?text=FOTO"
  },
  {
    name: "Placeholder Nome 3",
    role: "Líder de Vendas",
    text: "O pitch que montei no Dia 3 foi usado na mesma semana numa rodada de negócios. Primeira vez que não gaguejei ao apresentar a consequência e o mecanismo da minha entrega.",
    image: "https://via.placeholder.com/150/1f1f1f/cda652?text=FOTO"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-gray relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Metodologia <span className="text-brand-blue">comprovada</span> na trincheira
          </h2>
          <p className="text-gray-400 text-lg">
            Veja o que dizem aqueles que já mudaram sua rota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-brand-gray p-8 rounded-2xl border border-gray-800 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-dark opacity-50" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-brand-blue object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-brand-blue text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
