import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { quizQuestions } from '../data/quiz';
import { useLanguage } from '../context/LanguageContext';

export default function Quiz() {
  const { t } = useLanguage();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = quizQuestions[currentQ];

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  if (showResult) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="parchment-bg rounded-2xl border border-amber-200 p-10 shadow-lg">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${percentage >= 70 ? 'text-amber-500' : 'text-stone-400'}`} />
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            {t({ mr: 'प्रश्नमंजुषा पूर्ण!', en: 'Quiz Complete!' })}
          </h1>
          <p className="text-5xl font-bold gold-text my-4">{score}/{quizQuestions.length}</p>
          <p className="text-stone-600 mb-6">
            {percentage >= 80
              ? t({ mr: '🎉 उत्कृष्ट! तुम्ही खरे इतिहासप्रेमी आहात!', en: '🎉 Excellent! You are a true history enthusiast!' })
              : percentage >= 50
              ? t({ mr: '👍 चांगले! अजून शिकत रहा!', en: '👍 Good! Keep learning!' })
              : t({ mr: '📚 अजून अभ्यास करा आणि पुन्हा प्रयत्न करा!', en: '📚 Study more and try again!' })}
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={restart} className="btn-primary flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              {t({ mr: 'पुन्हा खेळा', en: 'Play Again' })}
            </button>
            <Link to="/forts" className="btn-secondary">
              {t({ mr: 'किल्ले शोधा', en: 'Explore Forts' })}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="section-title text-3xl">
          {t({ mr: '⚔️ स्वराज्य प्रश्नमंजुषा', en: '⚔️ Swarajya Quiz' })}
        </h1>
        <p className="text-stone-600 mt-4">
          {t({ mr: 'तुमचे स्वराज्याचे ज्ञान तपासा!', en: 'Test your knowledge of Swarajya!' })}
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-stone-500">
          {t({ mr: `प्रश्न ${currentQ + 1} / ${quizQuestions.length}`, en: `Question ${currentQ + 1} / ${quizQuestions.length}` })}
        </span>
        <span className="text-sm font-bold text-orange-700">
          {t({ mr: `गुण: ${score}`, en: `Score: ${score}` })}
        </span>
      </div>
      <div className="w-full bg-amber-100 rounded-full h-2 mb-8">
        <div className="bg-orange-600 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}></div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 animate-scale-in">
        <h2 className="text-xl font-bold text-stone-900 mb-6">{t(question.question)}</h2>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass = 'border-stone-200 hover:border-orange-300 hover:bg-orange-50';
            if (answered) {
              if (index === question.correctIndex) {
                optionClass = 'border-green-500 bg-green-50';
              } else if (index === selected && index !== question.correctIndex) {
                optionClass = 'border-red-400 bg-red-50';
              } else {
                optionClass = 'border-stone-200 opacity-60';
              }
            } else if (selected === index) {
              optionClass = 'border-orange-500 bg-orange-50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${optionClass}`}
              >
                <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-sm font-bold text-stone-600 shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-medium text-stone-800">{t(option)}</span>
                {answered && index === question.correctIndex && <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />}
                {answered && index === selected && index !== question.correctIndex && <XCircle className="w-5 h-5 text-red-500 ml-auto" />}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 animate-fade-in">
            <p className="text-sm text-stone-700">{t(question.explanation)}</p>
            {question.relatedFortId && (
              <Link to={`/fort/${question.relatedFortId}`} className="inline-block mt-2 text-orange-700 text-sm font-medium hover:underline">
                {t({ mr: 'किल्ला पहा →', en: 'View Fort →' })}
              </Link>
            )}
          </div>
        )}

        {answered && (
          <button onClick={nextQuestion} className="btn-primary mt-6 w-full">
            {currentQ < quizQuestions.length - 1
              ? t({ mr: 'पुढचा प्रश्न →', en: 'Next Question →' })
              : t({ mr: 'निकाल पहा', en: 'See Results' })}
          </button>
        )}
      </div>
    </div>
  );
}
