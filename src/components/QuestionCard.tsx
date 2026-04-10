import { useEffect, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
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
}: QuestionCardProps) {
  const [hoveredOptionIndex, setHoveredOptionIndex] = useState<number | null>(null);

  useEffect(() => {
    setHoveredOptionIndex(null);
  }, [question.id]);

  const handleOptionClick = (optionIndex: number, button: HTMLButtonElement) => {
    button.blur();
    setHoveredOptionIndex(null);
    onAnswer(optionIndex);
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLButtonElement>, optionIndex: number) => {
    if (event.pointerType !== 'mouse' || isLocked) {
      return;
    }

    setHoveredOptionIndex(optionIndex);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== 'mouse') {
      return;
    }

    setHoveredOptionIndex(null);
  };

  return (
    <section className="panel">
      <div className="mb-6 flex items-center justify-between">
        <span className="chip">第 {currentQuestion} 题</span>
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious || isLocked}
          className="text-sm font-medium text-black/55 transition hover:text-black disabled:cursor-not-allowed disabled:text-black/25"
        >
          上一题
        </button>
      </div>

      <ProgressBar current={currentQuestion} total={totalQuestions} />

      <div className="mt-6 space-y-2">
        <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">Question</p>
        <h2 className="text-2xl font-semibold leading-9 text-ink">{question.prompt}</h2>
      </div>

      <div className="mt-8 space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isHovered = hoveredOptionIndex === index;

          return (
            <button
              key={option.id}
              type="button"
              onClick={(event) => handleOptionClick(index, event.currentTarget)}
              onPointerEnter={(event) => handlePointerEnter(event, index)}
              onPointerLeave={handlePointerLeave}
              disabled={isLocked}
              className={[
                'option-card',
                isSelected || isHovered ? 'border-black bg-black text-white' : 'border-black/10 bg-white/70 text-ink',
                isLocked ? 'cursor-wait' : '',
              ].join(' ')}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/20 text-xs font-semibold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm leading-6 sm:text-base">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-center text-sm text-black/45">点击选项后自动进入下一题，返回可修改答案。</p>
    </section>
  );
}
