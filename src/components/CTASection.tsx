import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="gradient-hero rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Oferta Especial por Tempo Limitado
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Pronto para Transformar
                <br />
                Sua Vida?
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Junte-se a milhares de pessoas que já alcançaram seus objetivos com o Dieta FIT. 
                Comece hoje mesmo e veja os primeiros resultados em 7 dias!
              </p>
            </div>

            {/* Special Offer */}
            <div className="bg-white/15 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">🎯 Oferta Especial de Lançamento</div>
              <div className="text-lg mb-4">
                <span className="line-through text-white/70">R$ 49/mês</span>
                <span className="text-3xl font-bold ml-4">R$ 19/mês</span>
                <span className="text-sm ml-2">pelos primeiros 3 meses</span>
              </div>
              <div className="text-sm text-white/90">
                ⏰ Restam apenas 48 horas para aproveitar este preço
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg group"
              >
                Garantir Meu Desconto Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Ver Depoimentos
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex justify-center items-center gap-8 text-sm text-white/80 pt-4">
              <div className="flex items-center gap-2">
                ⭐⭐⭐⭐⭐
                <span>4.9/5 (2.847 avaliações)</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div>💳 Pagamento 100% Seguro</div>
              <div className="hidden sm:block">|</div>
              <div>🔒 Dados Protegidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;