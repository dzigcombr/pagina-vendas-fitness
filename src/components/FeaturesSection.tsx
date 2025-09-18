import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Calendar, 
  BarChart3, 
  Smartphone, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Personalizada",
    description: "Algoritmos avançados que aprendem com seus hábitos e preferências para criar o plano perfeito para você."
  },
  {
    icon: Target,
    title: "Objetivos Específicos",
    description: "Seja para emagrecer, ganhar massa muscular ou manter a forma, criamos estratégias direcionadas aos seus objetivos."
  },
  {
    icon: Calendar,
    title: "Planejamento Flexível",
    description: "Adapte seus treinos e refeições à sua rotina. Planos que se moldam ao seu estilo de vida."
  },
  {
    icon: BarChart3,
    title: "Acompanhamento Completo",
    description: "Monitore seu progresso com métricas detalhadas, gráficos e relatórios em PDF personalizados."
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Acesse suas dietas e treinos em qualquer lugar. Interface otimizada para dispositivos móveis."
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Suas informações pessoais e de saúde são protegidas com criptografia de nível bancário."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Por que escolher o 
            <span className="text-gradient"> Dieta FIT?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta combinada com conhecimento científico para acelerar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 gradient-card">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Como Funciona</h3>
            <p className="text-muted-foreground">Seu plano personalizado em apenas 3 passos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h4 className="text-xl font-semibold">Conte-nos sobre você</h4>
              <p className="text-muted-foreground">
                Responda um questionário rápido sobre seus objetivos, preferências alimentares e rotina
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h4 className="text-xl font-semibold">Receba seu plano</h4>
              <p className="text-muted-foreground">
                Nossa IA cria um plano personalizado de dieta e treinos baseado nas suas informações
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h4 className="text-xl font-semibold">Alcance seus objetivos</h4>
              <p className="text-muted-foreground">
                Siga seu plano, monitore o progresso e ajuste conforme necessário para melhores resultados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;