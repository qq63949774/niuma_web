import { useEffect, useRef, useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { quizQuestions } from './data/questions';
import { getResultType, getScoreBoard } from './utils/quiz';

type Screen = 'home' | 'quiz' | 'result';

function App() {
  const selectionFeedbackDelay = 140;
  const nextQuestionDelay = 520;
  const questionRevealDelay = 220;
  const [screen, setScreen] = useState<Screen>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array.from({ length: quizQuestions.length }, () => null));
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [isQuestionInteractive, setIsQuestionInteractive] = useState(true);
  const advanceTimerRef = useRef<number | null>(null);
  const hideQuestionTimerRef = useRef<number | null>(null);
  const revealQuestionTimerRef = useRef<number | null>(null);
  const advanceLockRef = useRef(false);

  const scoreBoard = getScoreBoard(quizQuestions, answers);
  const resultType = getResultType(scoreBoard);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
      }

      if (hideQuestionTimerRef.current !== null) {
        window.clearTimeout(hideQuestionTimerRef.current);
      }

      if (revealQuestionTimerRef.current !== null) {
        window.clearTimeout(revealQuestionTimerRef.current);
      }
    };
  }, []);

  const startQuiz = () => {
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setIsAdvancing(false);
    setIsQuestionVisible(true);
    setIsQuestionInteractive(true);
    advanceLockRef.current = false;
  };

  const restartQuiz = () => {
    setAnswers(Array.from({ length: quizQuestions.length }, () => null));
    setCurrentQuestionIndex(0);
    setIsAdvancing(false);
    setIsQuestionVisible(true);
    setIsQuestionInteractive(true);
    advanceLockRef.current = false;
    setScreen('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    if (advanceLockRef.current || isAdvancing) {
      return;
    }

    advanceLockRef.current = true;

    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
    }

    if (hideQuestionTimerRef.current !== null) {
      window.clearTimeout(hideQuestionTimerRef.current);
    }

    if (revealQuestionTimerRef.current !== null) {
      window.clearTimeout(revealQuestionTimerRef.current);
    }

    const nextAnswers = [...answers];
    nextAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(nextAnswers);
    setIsAdvancing(true);
    setIsQuestionInteractive(false);

    hideQuestionTimerRef.current = window.setTimeout(() => {
      setIsQuestionVisible(false);
    }, selectionFeedbackDelay);

    advanceTimerRef.current = window.setTimeout(() => {
      if (currentQuestionIndex === quizQuestions.length - 1) {
        setScreen('result');
        setIsAdvancing(false);
        setIsQuestionVisible(true);
        setIsQuestionInteractive(true);
        advanceLockRef.current = false;
        hideQuestionTimerRef.current = null;
        advanceTimerRef.current = null;
        return;
      }

      setCurrentQuestionIndex((value) => value + 1);
      setIsQuestionVisible(true);
      setIsQuestionInteractive(false);

      revealQuestionTimerRef.current = window.setTimeout(() => {
        setIsQuestionInteractive(true);
        setIsAdvancing(false);
        advanceLockRef.current = false;
        revealQuestionTimerRef.current = null;
      }, questionRevealDelay);

      hideQuestionTimerRef.current = null;
      advanceTimerRef.current = null;
    }, nextQuestionDelay);
  };

  const handlePrevious = () => {
    if (advanceLockRef.current || isAdvancing) {
      return;
    }

    setCurrentQuestionIndex((value) => Math.max(0, value - 1));
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 text-ink sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(243,235,105,0.24),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(255,122,89,0.15),_transparent_24%),linear-gradient(180deg,_#f7f5ef_0%,_#ece7dc_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(19,19,19,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(19,19,19,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-xl flex-col justify-center">
        {screen === 'home' ? <HomeScreen onStart={startQuiz} /> : null}

        {screen === 'quiz' ? (
          isQuestionVisible ? (
            <QuestionCard
              key={quizQuestions[currentQuestionIndex].id}
              question={quizQuestions[currentQuestionIndex]}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={quizQuestions.length}
              selectedOption={answers[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onPrevious={handlePrevious}
              isLocked={isAdvancing || !isQuestionInteractive}
              canGoPrevious={currentQuestionIndex > 0}
            />
          ) : (
            <section className="panel min-h-[540px] sm:min-h-[520px]" aria-hidden="true" />
          )
        ) : null}

        {screen === 'result' ? <ResultCard result={resultType} scoreBoard={scoreBoard} onRestart={restartQuiz} /> : null}
      </div>
    </main>
  );
}

export default App;
