import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Volume2, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Play,
  Trophy,
  Star
} from "lucide-react";

const quizData = [
  {
    question: "Como se diz 'Olá' em coreano?",
    korean: "안녕하세요",
    romanization: "annyeonghaseyo",
    options: ["안녕하세요", "감사합니다", "죄송합니다", "잘 가세요"],
    correct: 0,
    audio: "annyeonghaseyo.mp3"
  },
  {
    question: "Qual é o significado de '감사합니다'?",
    korean: "감사합니다",
    romanization: "gamsahamnida",
    options: ["Por favor", "Obrigado", "Desculpe", "Tchau"],
    correct: 1,
    audio: "gamsahamnida.mp3"
  },
  {
    question: "Como se escreve 'casa' em coreano?",
    korean: "집",
    romanization: "jip",
    options: ["학교", "집", "병원", "상점"],
    correct: 1,
    audio: "jip.mp3"
  }
];

const DemoSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsCompleted(false);
  };

  const playAudio = () => {
    // Simulação de reprodução de áudio
    console.log(`Playing audio: ${quizData[currentQuestion].audio}`);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizData.length) * 100;

  if (isCompleted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center card-learning">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Quiz Concluído!</h3>
              <p className="text-muted-foreground mb-6">
                Você acertou {score} de {quizData.length} questões
              </p>
              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-8 w-8 ${
                      i < Math.ceil((score / quizData.length) * 5)
                        ? 'text-yellow-500 fill-current'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Tentar Novamente
                </Button>
                <Button className="btn-primary" variant="hero">
                  Continuar Aprendendo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experimente uma <span className="text-gradient">Lição</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teste seus conhecimentos com este quiz interativo de vocabulário básico em coreano.
          </p>
        </div>

        {/* Quiz Interface */}
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} de {quizData.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 card-learning mb-8">
            {/* Question */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                Questão {currentQuestion + 1}
              </Badge>
              <h3 className="text-xl font-semibold mb-4">
                {quizData[currentQuestion].question}
              </h3>
              
              {/* Korean Text with Audio */}
              <div className="bg-muted rounded-lg p-4 mb-4 inline-block">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {quizData[currentQuestion].korean}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {quizData[currentQuestion].romanization}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={playAudio}
                    className="p-2"
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonClass = "p-4 text-left border-2 transition-all duration-200 hover:scale-105";
                
                if (showResult) {
                  if (index === quizData[currentQuestion].correct) {
                    buttonClass += " border-success bg-success/10 text-success";
                  } else if (index === selectedAnswer) {
                    buttonClass += " border-destructive bg-destructive/10 text-destructive";
                  } else {
                    buttonClass += " border-border opacity-50";
                  }
                } else {
                  buttonClass += selectedAnswer === index 
                    ? " border-primary bg-primary/10" 
                    : " border-border hover:border-primary/50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option}</span>
                      {showResult && index === quizData[currentQuestion].correct && (
                        <CheckCircle className="h-5 w-5 text-success" />
                      )}
                      {showResult && index === selectedAnswer && index !== quizData[currentQuestion].correct && (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {showResult && (
              <div className="mt-8 text-center">
                <Button onClick={nextQuestion} className="btn-primary" variant="hero">
                  {currentQuestion < quizData.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>

          {/* Encouragement */}
          <div className="text-center">
            <p className="text-muted-foreground">
              💡 <strong>Dica:</strong> Esta é apenas uma pequena amostra! Nosso curso completo 
              inclui centenas de exercícios interativos como este.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;