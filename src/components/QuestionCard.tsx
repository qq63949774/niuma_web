import type { QuizQuestion } from '../types/quiz';
import { ProgressBar } from './ProgressBar';

interface QuestionCardProps {
  question: QuizQuestion;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption: number | null;
  onAnswer: (optionIndex: number) => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
}

export function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onAnswer,
  onPrevious,
  canGoPrevious,
}: QuestionCardProps) {
  return (
    <section className="panel">
      <div className="mb-6 flex items-center justify-between">
        <span className="chip">第 {currentQuestion} 题</span>
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
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

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onAnswer(index)}
              className={[
                'w-full rounded-3xl border px-4 py-4 text-left transition duration-200 ease-out',
                'hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white',
                isSelected ? 'border-black bg-black text-white' : 'border-black/10 bg-white/70 text-ink',
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
