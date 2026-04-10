import { getScorePercent } from '../utils/quiz';
import type { DimensionScores } from '../types/quiz';
import type { ResultProfile } from '../data/results';

interface ResultCardProps {
  result: ResultProfile;
  scoreBoard: DimensionScores;
  onRestart: () => void;
}

const dimensionLabels = {
  endure: '忍耐值',
  internal: '内耗值',
  rebel: '反骨值',
  slack: '摸鱼值',
};

export function ResultCard({ result, scoreBoard, onRestart }: ResultCardProps) {
  const handleShare = async () => {
    const shareText = `我测出来是「${result.title}」: ${result.subtitle}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '测测你是什么牛马',
          text: shareText,
        });
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      window.alert('结果文案已复制，分享按钮先做成了轻量占位版。');
    } catch {
      window.alert('分享功能预留中，你可以先手动截图发给同事。');
    }
  };

  return (
    <section className="panel">
      <div className="rounded-[28px] border border-black/10 bg-ink p-5 text-white sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.35em] text-white/45">Your Niuma Type</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-signal sm:text-6xl">{result.title}</h2>
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/65">
            #{result.typeKey}
          </span>
        </div>
        <p className="mt-4 text-base leading-7 text-white/78">{result.subtitle}</p>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">一句总结</p>
          <p className="mt-2 text-lg font-semibold leading-8 text-ink">{result.description}</p>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">标签画像</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.traits.map((trait) => (
              <span key={trait} className="chip bg-signal/55 text-ink">
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">维度雷达</p>
          <div className="mt-3 space-y-3 rounded-[24px] border border-black/10 bg-white/70 p-4">
            {Object.entries(dimensionLabels).map(([dimension, label]) => (
              <div key={dimension} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-black/65">
                  <span>{label}</span>
                  <span>{getScorePercent(scoreBoard, dimension as keyof typeof dimensionLabels)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-black/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-signal via-alert to-ink transition-all duration-500"
                    style={{ width: `${getScorePercent(scoreBoard, dimension as keyof typeof dimensionLabels)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-dashed border-black/15 bg-black/4 p-4">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-black/40">打工建议</p>
          <p className="mt-2 text-sm leading-7 text-black/68">{result.advice}</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="action-button bg-ink text-white hover:-translate-y-0.5 hover:bg-black"
        >
          再测一次
        </button>
        <button
          type="button"
          onClick={() => void handleShare()}
          className="action-button bg-signal text-ink hover:-translate-y-0.5 hover:bg-[#ece15d]"
        >
          分享结果
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-black/45">截图效果已优先处理，欢迎转发给同事互相鉴定班味浓度。</p>
    </section>
  );
}
