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
  {
    id: 'q11',
    prompt: '早上第一杯咖啡喝下去以后，你的状态更像？',
    options: [
      {
        id: 'q11a',
        text: '续上命了，今天还能再扛两个需求。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q11b',
        text: '人是醒了，焦虑也跟着一起醒了。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q11c',
        text: '咖啡是苦的，班味更苦，所以我想说两句。',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q11d',
        text: '先拿咖啡在楼下绕一圈，假装自己在开战略会议。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q12',
    prompt: '碰到“这个很简单，今天先出一下”的需求，你通常会？',
    options: [
      {
        id: 'q12a',
        text: '先接住，再悄悄给今晚的自己点一根电子蜡烛。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q12b',
        text: '嘴上说可以，心里已经开始模拟翻车现场。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q12c',
        text: '礼貌纠正：你说的“简单”和我理解的可能不是一种简单。',
        scores: { rebel: 3, endure: 1 },
      },
      {
        id: 'q12d',
        text: '先做个能交差的版本，细节留给下一个平行宇宙。',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q13',
    prompt: '当你发现会议其实可以发消息解决时，你会？',
    options: [
      {
        id: 'q13a',
        text: '继续参会，顺便记好所有待办。',
        scores: { endure: 3 },
      },
      {
        id: 'q13b',
        text: '人坐着，灵魂已经开始替自己心疼工时。',
        scores: { internal: 3, slack: 1 },
      },
      {
        id: 'q13c',
        text: '很想问一句：我们是来同步信息，还是同步坐姿？',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q13d',
        text: '静音开着，顺手把别的活也做了，主打资源复用。',
        scores: { slack: 3, endure: 1 },
      },
    ],
  },
  {
    id: 'q14',
    prompt: '老板说“你最近状态不够积极”，你最可能怎么理解？',
    options: [
      {
        id: 'q14a',
        text: '那我再顶一顶，至少不能让项目掉地上。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q14b',
        text: '开始反思是不是连疲惫都表现得太明显了。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q14c',
        text: '积极的定义是谁定的，工时还是情绪表演？',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q14d',
        text: '理解成一句企业黑话，然后继续稳定低耗运行。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q15',
    prompt: '你的办公桌上，最像你灵魂外化的物件是什么？',
    options: [
      {
        id: 'q15a',
        text: '贴满标签的待办本，像一块永不下线的工地。',
        scores: { endure: 3 },
      },
      {
        id: 'q15b',
        text: '那杯凉掉的咖啡，像我来不及处理的情绪。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q15c',
        text: '一张写着“拒绝画饼”的便签，虽然没真的贴出来。',
        scores: { rebel: 3 },
      },
      {
        id: 'q15d',
        text: '永远开着的耳机和一个看似忙碌的 Excel。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q16',
    prompt: '下午三点犯困时，你一般靠什么续命？',
    options: [
      {
        id: 'q16a',
        text: '再来一杯浓咖啡，今天必须把自己摇醒。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q16b',
        text: '喝咖啡时顺便想一想，人生是不是不该只有待办。',
        scores: { internal: 3 },
      },
      {
        id: 'q16c',
        text: '借去接咖啡的路上，顺便和制度进行一场精神辩论。',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q16d',
        text: '下楼买咖啡顺便多走两圈，尽量把这段算进工时。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q17',
    prompt: '如果项目群里有人说“大家辛苦一下”，你会自动翻译成？',
    options: [
      {
        id: 'q17a',
        text: '收到，今晚大概率又得靠意志力发电。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q17b',
        text: '辛苦一下 = 焦虑一整晚，我很会做阅读理解。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q17c',
        text: '这句话信息量太低，我想申请翻译器。',
        scores: { rebel: 3, slack: 1 },
      },
      {
        id: 'q17d',
        text: '先回个表情包，具体辛苦程度明天再说。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q18',
    prompt: '你怎么看“下班后团建一下，增强凝聚力”？',
    options: [
      {
        id: 'q18a',
        text: '能去就去，毕竟我还想维持体面社交。',
        scores: { endure: 3, internal: 1 },
      },
      {
        id: 'q18b',
        text: '嘴上答应，心里已经替自己的周末默哀。',
        scores: { internal: 3, endure: 1 },
      },
      {
        id: 'q18c',
        text: '凝聚力能不能先体现在准点下班上？',
        scores: { rebel: 3, internal: 1 },
      },
      {
        id: 'q18d',
        text: '找个合理理由撤退，我和床的凝聚力更高。',
        scores: { slack: 3, rebel: 1 },
      },
    ],
  },
  {
    id: 'q19',
    prompt: '你理想中的工位饮品，最能代表哪种打工哲学？',
    options: [
      {
        id: 'q19a',
        text: '美式，苦一点无所谓，能顶住就行。',
        scores: { endure: 3 },
      },
      {
        id: 'q19b',
        text: '拿铁，表面温和，内里全是复杂情绪。',
        scores: { internal: 3 },
      },
      {
        id: 'q19c',
        text: '冰博克，贵点没事，至少别让我活得太标准化。',
        scores: { rebel: 3, slack: 1 },
      },
      {
        id: 'q19d',
        text: '白水，低调、安全、方便随时离开工位透口气。',
        scores: { slack: 3, internal: 1 },
      },
    ],
  },
  {
    id: 'q20',
    prompt: '如果让你给自己的打工日常起个片名，你选？',
    options: [
      {
        id: 'q20a',
        text: '《今天也把坑填上了》',
        scores: { endure: 4 },
      },
      {
        id: 'q20b',
        text: '《我的情绪比咖啡先凉》',
        scores: { internal: 4 },
      },
      {
        id: 'q20c',
        text: '《谁动了我的下班权》',
        scores: { rebel: 4 },
      },
      {
        id: 'q20d',
        text: '《工位在这，灵魂在路上》',
        scores: { slack: 4 },
      },
    ],
  },
];
