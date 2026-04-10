interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-black/55">
        <span>答题进度</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-black/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ink via-black to-alert transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
