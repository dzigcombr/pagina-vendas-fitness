import { Button } from "@/components/ui/button";
import { Dumbbell, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Dieta FIT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Funcionalidades
            </a>
            <a href="#plans" className="text-foreground hover:text-primary transition-smooth">
              Planos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">
                Início
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                Funcionalidades
              </a>
              <a href="#plans" className="text-foreground hover:text-primary transition-smooth">
                Planos
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button variant="hero" size="sm">
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;