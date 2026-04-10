import type { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: '周一早会上，老板说“这周我们冲一下”，你第一反应是？',
    options: [
      {
        id: 'q1a',
        text: '默默打开待办，心想冲就冲，反正命硬。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q1b',
        text: '表面点头如捣蒜，内心已经演到离职后的海边。',
        scores: { internal: 3, slack: 1 },
      },
      {
        id: 'q1c',
        text: '先问一句：冲 KPI 还是冲我？',
        scores: { rebel: 3, endure: 1 },
      },
      {
        id: 'q1d',
        text: '先把会议窗口缩小，看看中午吃什么续命。',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q2',
    prompt: '临近下班，领导发来一句“方便同步下吗”，你会？',
    options: [
      {
        id: 'q2a',
        text: '回一个“收到”，并给自己泡一杯最苦的咖啡。',
        scores: { endure: 2, internal: 2 },
      },
      {
        id: 'q2b',
        text: '先看字数和标点，判断这波加班有多大。',
        scores: { internal: 3, slack: 1 },
      },
      {
        id: 'q2c',
        text: '直接问：现在说，还是明早我带着情绪说？',
        scores: { rebel: 3, endure: 1 },
      },
      {
        id: 'q2d',
        text: '手机一扣，假装在地铁里信号失踪。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q3',
    prompt: '项目需求第 5 次改版时，你通常是什么状态？',
    options: [
      {
        id: 'q3a',
        text: '继续改，毕竟我已经和需求共生了。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q3b',
        text: '嘴上说 OK，心里已经在写一部职场伤痛文学。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q3c',
        text: '开始追问“为什么改”和“谁拍的板”。',
        scores: { rebel: 2, endure: 1, internal: 1 },
      },
      {
        id: 'q3d',
        text: '先改最能看见的地方，剩下的交给未来的自己。',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q4',
    prompt: '你在工位上最常说的一句话是？',
    options: [
      {
        id: 'q4a',
        text: '“没事，我来兜。”',
        scores: { endure: 3 },
      },
      {
        id: 'q4b',
        text: '“我有点想静静，但静静也在加班。”',
        scores: { internal: 3 },
      },
      {
        id: 'q4c',
        text: '“这个锅我不背，至少先开个会再说。”',
        scores: { rebel: 3 },
      },
      {
        id: 'q4d',
        text: '“先别急，我切回去看看刚才那个表格。”',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q5',
    prompt: '午休时间，你最像下面哪种人？',
    options: [
      {
        id: 'q5a',
        text: '吃饭十分钟，剩下时间继续把活补平。',
        scores: { endure: 3, slack: 1 },
      },
      {
        id: 'q5b',
        text: '一边吃饭一边复盘上午哪里又让自己受伤了。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q5c',
        text: '跟同事吐槽制度，像在进行一场地下演讲。',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q5d',
        text: '耳机一戴，灵魂出窍，谁都别想找到我。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q6',
    prompt: '当同事把一个“顺手的活”甩给你时，你会？',
    options: [
      {
        id: 'q6a',
        text: '接住，顺便把细节也补完。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q6b',
        text: '接住，但会默默记在心里的小本本上。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q6c',
        text: '礼貌反问：为什么这个“顺手”总顺到我这？',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q6d',
        text: '先放进待办最下面，主打一个缘分处理。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q7',
    prompt: '你最真实的绩效心态更接近哪一句？',
    options: [
      {
        id: 'q7a',
        text: '能拿就拿，拿不到也得把活干完。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q7b',
        text: '越想越气，但还是会反复推演自己哪里没做好。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q7c',
        text: '规则不合理我就想掀桌，至少先掀语气。',
        scores: { rebel: 3, endure: 1 },
      },
      {
        id: 'q7d',
        text: '绩效像天气，看看就行，别太走心。',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q8',
    prompt: '如果老板突然说“年轻人要有成长性”，你会？',
    options: [
      {
        id: 'q8a',
        text: '点头接受，再给自己加一层抗压护甲。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q8b',
        text: '笑着说好，晚上回家细品这句话到睡不着。',
        scores: { internal: 3 },
      },
      {
        id: 'q8c',
        text: '反问：成长性是指能力，还是工时？',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q8d',
        text: '表面成长，实际先把浏览器切到购物车。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q9',
    prompt: '团队群里半夜还有消息时，你一般会？',
    options: [
      {
        id: 'q9a',
        text: '先回一句“收到”，主打一个人在魂在。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q9b',
        text: '已读不回，然后脑内开始循环播放焦虑 BGM。',
        scores: { internal: 3, slack: 1 },
      },
      {
        id: 'q9c',
        text: '想回“明天说”，并认真考虑要不要真的发。',
        scores: { rebel: 2, internal: 1, endure: 1 },
      },
      {
        id: 'q9d',
        text: '手机开免打扰，毕竟我的灵魂也有下班权。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q10',
    prompt: '如果必须用一个词总结你的打工状态，你选？',
    options: [
      {
        id: 'q10a',
        text: '扛着',
        scores: { endure: 4 },
      },
      {
        id: 'q10b',
        text: '憋着',
        scores: { internal: 4 },
      },
      {
        id: 'q10c',
        text: '顶着',
        scores: { rebel: 4 },
      },
      {
        id: 'q10d',
        text: '躺着',
        scores: { slack: 4 },
      },
    ],
  },
];
