import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { QuizQuestion } from '../types/quiz';
import { ProgressBar } from './ProgressBar';

interface QuestionCardProps {
  question: QuizQuestion;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption: number | null;
  onAnswer: (optionIndex: number) => void;
  onPrevious: () => void;
  isLocked: boolean;
  canGoPrevious: boolean;
  isTransitioning: boolean;
  upcomingQuestion: number;
}

export function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onAnswer,
  onPrevious,
  isLocked,
  canGoPrevious,
  isTransitioning,
  upcomingQuestion,
}: QuestionCardProps) {
  const handleOptionSelect = (optionIndex: number) => {
    if (isLocked) {
      return;
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    onAnswer(optionIndex);
  };

  const handleOptionKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>, optionIndex: number) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    handleOptionSelect(optionIndex);
  };

  const progressQuestion = isTransitioning ? upcomingQuestion : currentQuestion;

  return (
    <section className="panel relative min-h-[540px] sm:min-h-[520px]">
      {isLocked ? <div className="absolute inset-0 z-10" aria-hidden="true" /> : null}

      <div className="mb-6 flex items-center justify-between">
        <span className="chip">{isTransitioning ? `载入第 ${upcomingQuestion} 题` : `第 ${currentQuestion} 题`}</span>
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious || isLocked || isTransitioning}
          className="text-sm font-medium text-black/55 transition hover:text-black disabled:cursor-not-allowed disabled:text-black/25"
        >
          上一题
        </button>
      </div>

      <ProgressBar current={progressQuestion} total={totalQuestions} />

      <div className="mt-6 space-y-2">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">
          {isTransitioning ? 'Syncing' : 'Question'}
        </p>
        {isTransitioning ? (
          <div className="space-y-3">
            <div className="question-transition-line h-10 w-[88%] rounded-[18px]" />
            <div className="question-transition-line h-10 w-[64%] rounded-[18px]" />
          </div>
        ) : (
          <h2 className="text-2xl font-semibold leading-9 text-ink">{question.prompt}</h2>
        )}
      </div>

      <div className="mt-8 space-y-3">
        {isTransitioning
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`transition-${index}`}
                className="question-transition-option flex items-center gap-4 rounded-[28px] border border-black/8 bg-white/72 px-5 py-5"
              >
                <div className="question-transition-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 text-sm font-semibold text-black/38">
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="question-transition-line h-4 w-[84%] rounded-full" />
                  <div className="question-transition-line h-4 w-[54%] rounded-full" />
                </div>
              </div>
            ))
          : question.options.map((option, index) => {
              const isSelected = selectedOption === index;

              return (
                <div
                  key={option.id}
                  role="button"
                  tabIndex={isLocked ? -1 : 0}
                  aria-disabled={isLocked}
                  onPointerUp={() => handleOptionSelect(index)}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  className={[
                    'option-card',
                    isSelected ? 'border-black bg-black text-white' : 'border-black/10 bg-white/70 text-ink',
                    isLocked ? 'pointer-events-none cursor-wait opacity-95' : 'cursor-pointer',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/20 text-xs font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm leading-6 sm:text-base">{option.text}</span>
                  </div>
                </div>
              );
            })}
      </div>

      <p className="mt-5 text-center text-sm text-black/45">
        {isTransitioning ? '题目缓冲中，正在清理上一题的触摸状态。' : '点击选项后自动进入下一题，返回可修改答案。'}
      </p>
    </section>
  );
}
