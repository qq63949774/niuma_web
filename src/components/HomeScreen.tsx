interface HomeScreenProps {
  onStart: () => void;
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <section className="panel">
      <div className="mb-6 flex items-center justify-between">
        <span className="chip">互联网嘴替版</span>
        <span className="chip">10 道灵魂工位题</span>
      </div>

      <div className="space-y-4">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-black/45">What Kind Of Niuma</p>
        <h1 className="max-w-[12ch] font-display text-5xl uppercase leading-none text-ink sm:text-6xl">
          测测你是什么牛马
        </h1>
        <p className="max-w-[28ch] text-base leading-7 text-black/70">
          打工这么多年，你到底是哪一类职场牛马？做完 10 道题，看看你的班味属于哪种流派。
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-black/72">
        <div className="rounded-3xl border border-black/10 bg-black px-4 py-4 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">Tag</p>
          <p className="mt-2 text-lg font-semibold">工位人格测试</p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-signal px-4 py-4">
          <p className="text-xs uppercase tracking-[0.28em] text-black/50">Mood</p>
          <p className="mt-2 text-lg font-semibold">轻吐槽，不伤人</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-8 action-button w-full bg-ink text-base text-white hover:-translate-y-0.5 hover:bg-black"
      >
        开始测试
      </button>

      <p className="mt-4 text-center text-sm text-black/45">友情提示：结果仅供自嘲与截图传播，不作为年终评优依据。</p>
    </section>
  );
}
