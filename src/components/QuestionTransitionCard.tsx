interface QuestionTransitionCardProps {
  upcomingQuestion: number;
  totalQuestions: number;
}

export function QuestionTransitionCard({ upcomingQuestion, totalQuestions }: QuestionTransitionCardProps) {
  return (
    <section className="panel question-transition-card relative min-h-[540px] overflow-hidden sm:min-h-[520px]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,235,105,0.22),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(255,122,89,0.14),_transparent_26%)]" />
      <div className="question-transition-scan absolute inset-x-0 top-0 h-28" />

      <div className="relative z-[1]">
        <div className="mb-6 flex items-center justify-between">
          <span className="chip border-black/15 bg-white/75 text-ink">载入第 {upcomingQuestion} 题</span>
          <span className="font-display text-xs uppercase tracking-[0.34em] text-black/35">buffering vibe</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-end justify-between text-sm text-black/50">
            <span>答题进度同步中</span>
            <span>
              {upcomingQuestion} / {totalQuestions}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-black/8">
            <div
              className="question-transition-progress h-full rounded-full"
              style={{ width: `${Math.round((upcomingQuestion / totalQuestions) * 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-black/8 bg-white/62 px-5 py-6 backdrop-blur">
          <div className="question-transition-line mb-4 h-4 w-28 rounded-full" />
          <div className="question-transition-line h-11 w-[92%] rounded-[18px]" />
          <div className="question-transition-line mt-3 h-11 w-[68%] rounded-[18px]" />
        </div>

        <div className="mt-6 space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
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
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-black/34">
          <span>Question stream stabilizing</span>
          <span className="rounded-full border border-black/10 px-3 py-1">niuma engine</span>
        </div>
      </div>
    </section>
  );
}
