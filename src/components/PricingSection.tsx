import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown, Shield } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Perfeito para começar sua jornada fitness",
    price: "R$ 29",
    period: "/mês",
    features: [
      "Plano de dieta personalizado",
      "3 treinos por semana",
      "Acompanhamento básico",
      "Suporte por email",
      "Relatórios mensais"
    ],
    popular: false,
    cta: "Começar Grátis"
  },
  {
    name: "Premium",
    description: "Para quem busca resultados rápidos e consistentes",
    price: "R$ 49",
    period: "/mês",
    features: [
      "Tudo do plano Básico",
      "Treinos diários personalizados",
      "Cardápio detalhado com receitas",
      "Acompanhamento em tempo real",
      "Suporte prioritário 24/7",
      "Relatórios semanais em PDF",
      "Ajustes automáticos do plano"
    ],
    popular: true,
    cta: "Experimentar Premium"
  },
  {
    name: "VIP",
    description: "Experiência completa com acompanhamento exclusivo",
    price: "R$ 99",
    period: "/mês",
    features: [
      "Tudo do plano Premium",
      "Consulta com nutricionista",
      "Personal trainer virtual",
      "Lista de compras automática",
      "Integração com dispositivos fitness",
      "Grupo VIP exclusivo",
      "Chamadas de acompanhamento",
      "Garantia de resultados"
    ],
    popular: false,
    cta: "Seja VIP"
  }
];

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Escolha seu 
            <span className="text-gradient"> Plano Ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem 7 dias grátis. Cancele a qualquer momento sem complicações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-smooth ${
                plan.popular ? 'ring-2 ring-primary shadow-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-hero px-4 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    {plan.name}
                    {plan.name === "VIP" && <Crown className="h-5 w-5 text-primary" />}
                  </CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "default"}
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Garantia de 30 dias ou seu dinheiro de volta
          </div>
          <p className="text-muted-foreground text-sm">
            Não está satisfeito? Reembolsamos 100% do valor pago nos primeiros 30 dias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;