import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforme seu 
                <span className="text-gradient block">Corpo & Mente</span>
                com Dieta FIT
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Dietas e treinos personalizados criados especialmente para seus objetivos. 
                Tecnologia avançada que se adapta ao seu estilo de vida.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30d</div>
                <div className="text-sm text-muted-foreground">Primeiros Resultados</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>✓ Sem compromisso</span>
              <span>✓ Cancelamento gratuito</span>
              <span>✓ Suporte 24/7</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={heroImage} 
                alt="Dieta FIT - Aplicativo de fitness e nutrição"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 gradient-card p-4 rounded-xl shadow-card border">
              <div className="text-sm font-semibold text-primary">Seu Progresso</div>
              <div className="text-2xl font-bold">-5.2kg</div>
              <div className="text-xs text-muted-foreground">Esta semana</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 gradient-card p-4 rounded-xl shadow-card border">
              <div className="text-sm font-semibold text-secondary">Treino de Hoje</div>
              <div className="text-lg font-bold">Concluído ✓</div>
              <div className="text-xs text-muted-foreground">45min • Cardio + Força</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;