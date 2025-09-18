import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Dieta FIT</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando vidas através de dietas e treinos personalizados. 
              Sua jornada fitness começa aqui.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#home" className="hover:text-background transition-smooth">Início</a></li>
              <li><a href="#features" className="hover:text-background transition-smooth">Funcionalidades</a></li>
              <li><a href="#plans" className="hover:text-background transition-smooth">Planos</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">FAQ</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:suporte@dietafit.com" className="hover:text-background transition-smooth">
                  suporte@dietafit.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5511999999999" className="hover:text-background transition-smooth">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Dieta FIT. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-background/70 text-sm">
              <a href="#" className="hover:text-background transition-smooth">Instagram</a>
              <a href="#" className="hover:text-background transition-smooth">Facebook</a>
              <a href="#" className="hover:text-background transition-smooth">YouTube</a>
              <a href="#" className="hover:text-background transition-smooth">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;