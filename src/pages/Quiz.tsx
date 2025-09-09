import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Volume2, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Play,
  Trophy,
  Star,
  Home
} from "lucide-react";

const quizData = [
  // Vogais básicas
  {
    question: "Qual é o som da vogal 'ㅏ'?",
    korean: "ㅏ",
    romanization: "a",
    options: ["a", "e", "i", "o"],
    correct: 0,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal 'ㅓ'?",
    korean: "ㅓ",
    romanization: "eo",
    options: ["a", "eo", "u", "i"],
    correct: 1,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal 'ㅗ'?",
    korean: "ㅗ",
    romanization: "o",
    options: ["u", "o", "a", "i"],
    correct: 1,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal 'ㅜ'?",
    korean: "ㅜ",
    romanization: "u",
    options: ["o", "a", "u", "e"],
    correct: 2,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal 'ㅡ'?",
    korean: "ㅡ",
    romanization: "eu",
    options: ["i", "eu", "a", "o"],
    correct: 1,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal 'ㅣ'?",
    korean: "ㅣ",
    romanization: "i",
    options: ["u", "e", "i", "a"],
    correct: 2,
    type: "vowel"
  },
  // Vogais duplas
  {
    question: "Qual é o som da vogal dupla 'ㅑ'?",
    korean: "ㅑ",
    romanization: "ya",
    options: ["ya", "yeo", "yo", "yu"],
    correct: 0,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal dupla 'ㅕ'?",
    korean: "ㅕ",
    romanization: "yeo",
    options: ["ya", "yeo", "yo", "yu"],
    correct: 1,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal dupla 'ㅛ'?",
    korean: "ㅛ",
    romanization: "yo",
    options: ["ya", "yeo", "yo", "yu"],
    correct: 2,
    type: "vowel"
  },
  {
    question: "Qual é o som da vogal dupla 'ㅠ'?",
    korean: "ㅠ",
    romanization: "yu",
    options: ["ya", "yeo", "yo", "yu"],
    correct: 3,
    type: "vowel"
  },
  // Consoantes básicas
  {
    question: "Qual é o som da consoante 'ㄱ'?",
    korean: "ㄱ",
    romanization: "g/k",
    options: ["g/k", "n", "d/t", "r/l"],
    correct: 0,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㄴ'?",
    korean: "ㄴ",
    romanization: "n",
    options: ["m", "n", "ng", "r"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㄷ'?",
    korean: "ㄷ",
    romanization: "d/t",
    options: ["g/k", "n", "d/t", "r/l"],
    correct: 2,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㄹ'?",
    korean: "ㄹ",
    romanization: "r/l",
    options: ["g/k", "n", "d/t", "r/l"],
    correct: 3,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅁ'?",
    korean: "ㅁ",
    romanization: "m",
    options: ["m", "b/p", "s", "ng"],
    correct: 0,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅂ'?",
    korean: "ㅂ",
    romanization: "b/p",
    options: ["m", "b/p", "s", "j"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅅ'?",
    korean: "ㅅ",
    romanization: "s",
    options: ["sh", "s", "ch", "k"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅇ'?",
    korean: "ㅇ",
    romanization: "ng/silent",
    options: ["n", "ng/silent", "m", "r"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅈ'?",
    korean: "ㅈ",
    romanization: "j",
    options: ["ch", "j", "k", "t"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅊ'?",
    korean: "ㅊ",
    romanization: "ch",
    options: ["ch", "j", "s", "sh"],
    correct: 0,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅋ'?",
    korean: "ㅋ",
    romanization: "k",
    options: ["g", "k", "t", "p"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅍ'?",
    korean: "ㅍ",
    romanization: "p",
    options: ["b", "p", "f", "v"],
    correct: 1,
    type: "consonant"
  },
  {
    question: "Qual é o som da consoante 'ㅎ'?",
    korean: "ㅎ",
    romanization: "h",
    options: ["h", "k", "s", "sh"],
    correct: 0,
    type: "consonant"
  },
  // Palavras simples com vogais duplas
  {
    question: "Como se lê a palavra '야구' (baseball)?",
    korean: "야구",
    romanization: "yagu",
    options: ["yagu", "yeagu", "yogu", "yugu"],
    correct: 0,
    type: "word"
  },
  {
    question: "Como se lê a palavra '여자' (mulher)?",
    korean: "여자",
    romanization: "yeoja",
    options: ["yaja", "yeoja", "yoja", "yuja"],
    correct: 1,
    type: "word"
  },
  {
    question: "Como se lê a palavra '요리' (culinária)?",
    korean: "요리",
    romanization: "yori",
    options: ["yari", "yeori", "yori", "yuri"],
    correct: 2,
    type: "word"
  },
  {
    question: "Como se lê a palavra '유리' (vidro)?",
    korean: "유리",
    romanization: "yuri",
    options: ["yari", "yeori", "yori", "yuri"],
    correct: 3,
    type: "word"
  },
  {
    question: "Como se lê a palavra '가방' (bolsa)?",
    korean: "가방",
    romanization: "gabang",
    options: ["gabang", "kagag", "gabong", "kagong"],
    correct: 0,
    type: "word"
  },
  {
    question: "Como se lê a palavra '나무' (árvore)?",
    korean: "나무",
    romanization: "namu",
    options: ["namo", "namu", "nomu", "namu"],
    correct: 1,
    type: "word"
  },
  {
    question: "Como se lê a palavra '다리' (perna/ponte)?",
    korean: "다리",
    romanization: "dari",
    options: ["dali", "dari", "tari", "tali"],
    correct: 1,
    type: "word"
  },
  {
    question: "Como se lê a palavra '라면' (lámen)?",
    korean: "라면",
    romanization: "ramyeon",
    options: ["lamyeon", "ramyeon", "ramyen", "lamyen"],
    correct: 1,
    type: "word"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
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
    console.log(`Playing audio: ${quizData[currentQuestion].korean}`);
  };

  const goHome = () => {
    navigate('/');
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizData.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-20">
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
                <Button onClick={goHome} className="btn-primary" variant="hero">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const getQuestionTypeColor = (type: string) => {
    switch (type) {
      case 'vowel': return 'from-pink-400 to-pink-600';
      case 'consonant': return 'from-blue-400 to-blue-600';
      case 'word': return 'from-green-400 to-green-600';
      default: return 'from-primary to-primary';
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'vowel': return 'Vogal';
      case 'consonant': return 'Consoante';
      case 'word': return 'Palavra';
      default: return 'Questão';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            onClick={goHome} 
            variant="ghost" 
            className="mb-4"
          >
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Quiz de <span className="text-gradient">Hangeul</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teste seus conhecimentos do alfabeto coreano com vogais, consoantes e palavras básicas.
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
            {/* Question Type Badge */}
            <div className="flex justify-between items-center mb-6">
              <Badge variant="secondary" className="font-medium">
                {getQuestionTypeLabel(quizData[currentQuestion].type)} {currentQuestion + 1}
              </Badge>
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getQuestionTypeColor(quizData[currentQuestion].type)}`} />
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {quizData[currentQuestion].question}
              </h3>
              
              {/* Korean Text with Audio */}
              <div className="bg-muted rounded-lg p-4 mb-4 inline-block">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">
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
        </div>
      </div>
    </div>
  );
};

export default Quiz;