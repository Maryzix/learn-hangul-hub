import { 
  Zap, 
  Brain, 
  Headphones, 
  GamepadIcon, 
  Calendar, 
  Award,
  Globe,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Aprendizado Interativo",
    description: "Lições dinâmicas com exercícios práticos, flashcards e jogos educativos para fixar o conteúdo.",
    color: "text-yellow-500"
  },
  {
    icon: Brain,
    title: "IA Personalizada",
    description: "Nossa inteligência artificial adapta o conteúdo ao seu ritmo e identifica pontos de melhoria.",
    color: "text-purple-500"
  },
  {
    icon: Headphones,
    title: "Pronúncia Nativa",
    description: "Áudios gravados por nativos coreanos para desenvolver uma pronúncia autêntica.",
    color: "text-blue-500"
  },
  {
    icon: GamepadIcon,
    title: "Gamificação",
    description: "Sistema de pontos, conquistas e desafios diários para manter sua motivação em alta.",
    color: "text-green-500"
  },
  {
    icon: Calendar,
    title: "Planejamento Flexível",
    description: "Crie sua agenda de estudos personalizada e receba lembretes para manter a consistência.",
    color: "text-orange-500"
  },
  {
    icon: Globe,
    title: "Contexto Cultural",
    description: "Aprenda não apenas a língua, mas também sobre a rica cultura coreana e suas tradições.",
    color: "text-pink-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que Escolher Nosso <span className="text-gradient">Método</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos tecnologia avançada com metodologia comprovada para 
            oferecer a melhor experiência de aprendizado de coreano.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="card-learning p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="card-learning p-8 md:p-12 text-center gradient-sakura relative overflow-hidden">
          {/* Background Korean Characters */}
          <div className="absolute inset-0 opacity-10 text-white">
            <div className="absolute top-4 left-8 text-6xl">한</div>
            <div className="absolute top-12 right-12 text-4xl">국</div>
            <div className="absolute bottom-8 left-16 text-5xl">어</div>
            <div className="absolute bottom-4 right-8 text-3xl">♥</div>
          </div>
          
          <div className="relative z-10">
            <Heart className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Junte-se a Milhares de Estudantes!
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Faça parte da maior comunidade de aprendizado de coreano do Brasil. 
              Comece sua jornada hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-colors">
                Começar Gratuitamente
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;