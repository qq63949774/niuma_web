import type { DimensionKey, ResultType } from '../types/quiz';

export interface ResultRule {
  primary: DimensionKey;
  secondary?: DimensionKey;
}

export interface ResultProfile extends ResultType {
  rule: ResultRule;
}

export const resultProfiles: ResultProfile[] = [
  {
    typeKey: 'iron-mule',
    title: '铁血扛压牛',
    subtitle: '活可以多，脸不能垮，硬扛是你的默认工作流。',
    description:
      '你是团队里的稳定器，需求砸下来先接住，节奏乱了先补位。你不是不累，只是已经熟练掌握“先把事做完，再偷偷叹气”的打工人生存术。',
    traits: ['抗压在线', '责任心过剩', '容易被默认靠谱', '很少主动喊停'],
    advice: '别把“我能做”自动翻译成“都该我做”。靠谱是优点，不是无限续杯。 ',
    rule: { primary: 'endure', secondary: 'internal' },
  },
  {
    typeKey: 'mute-volcano',
    title: '沉默火山牛',
    subtitle: '外表平静如日报，内里已经翻涌成季度复盘。',
    description:
      '你很少当场爆炸，但并不代表你没有情绪。你擅长把委屈和压力打包压缩，等夜深人静时再一个人慢慢解压缩。',
    traits: ['高敏感', '脑内复盘王者', '情绪延迟到账', '看起来很能忍'],
    advice: '内耗不等于敬业。把该说的话提早说出来，比回家后反复 replay 更省电。',
    rule: { primary: 'internal', secondary: 'endure' },
  },
  {
    typeKey: 'deadline-knight',
    title: '嘴硬续命牛',
    subtitle: '嘴上不服，手上还在交付，主打一个边吐槽边冲刺。',
    description:
      '你有反骨，但不是摆烂型反骨。碰到离谱需求会先顶两句，再把方案拍出来。你的斗志往往来自“这事不能这么整”。',
    traits: ['有边界感', '执行力不差', '敢问为什么', '情绪里带行动'],
    advice: '你的锋芒很珍贵，记得给自己留缓冲区。每次都正面硬接，久了也会磨损。',
    rule: { primary: 'endure', secondary: 'rebel' },
  },
  {
    typeKey: 'anti-pua-fighter',
    title: '反 PUA 斗士牛',
    subtitle: '你不是不好带，你只是对无效消耗没有耐心。',
    description:
      '你擅长识别那些披着成长外衣的情绪劳动，一旦踩到边界，你会本能地站出来。你是团队里稀缺的清醒派，只是有时清醒得过于辛辣。',
    traits: ['边界清晰', '不爱吃画饼', '敢于发问', '拒绝自我感动'],
    advice: '坚持边界没有问题，但也要给真正愿意协作的人一点空间。清醒不必总是带刺。',
    rule: { primary: 'rebel', secondary: 'endure' },
  },
  {
    typeKey: 'ghost-shift',
    title: '工位游魂牛',
    subtitle: '人坐在工位上，灵魂已经暂住在午休和下班之间。',
    description:
      '你不是不干活，你只是非常珍惜有限的精神电量。面对无意义消耗时，你会启动最低能耗模式，用最少的情绪度过最长的工作日。',
    traits: ['续命优先', '节能意识强', '对无效流程过敏', '擅长精神离线'],
    advice: '摸鱼是一种恢复，但别让自己长期停在低电量。保留一点主动选择，比被动漂着更舒服。',
    rule: { primary: 'internal', secondary: 'slack' },
  },
  {
    typeKey: 'weekend-saver',
    title: '周末守护牛',
    subtitle: '工作可以做，生活不能全赔进去。',
    description:
      '你很懂得给自己留余地。该回的消息会回，该演的体面会演，但心里一直有条明确的线: 班是班，命是命，别混着算。',
    traits: ['边界现实派', '精力分配高手', '不轻易自我绑架', '保持生活感'],
    advice: '你的节奏感很难得，继续守住它。别因为偶尔的 guilt，又把边界一点点退没了。',
    rule: { primary: 'slack', secondary: 'internal' },
  },
  {
    typeKey: 'anti-clockin-artist',
    title: '摸鱼艺术牛',
    subtitle: '你对时间缝隙的利用率，堪比高级生产力工具。',
    description:
      '你天生会在流程缝隙里给自己找呼吸口，知道什么时候该认真，什么时候该留白。你不是纯摆烂，而是拒绝把所有能量都献祭给无效工时。',
    traits: ['节奏感强', '情绪自救意识高', '会给自己找出口', '很懂体面摸鱼'],
    advice: '你已经很会保命了，下一步是把有限的认真放到真正值当的事情上。',
    rule: { primary: 'slack', secondary: 'rebel' },
  },
  {
    typeKey: 'office-punk',
    title: '办公室朋克牛',
    subtitle: '心里住着摇滚主唱，工牌却还老老实实挂在胸前。',
    description:
      '你不是装酷，你是真的对很多套路没耐心。你会在会议上沉默，但不代表你认同；你会在群里克制，但心里已经写好了一段完整反驳稿。',
    traits: ['反骨常驻', '不轻信话术', '表达欲克制但真实', '对形式主义零滤镜'],
    advice: '反骨是保护壳，不必每次都用最硬的方式出现。把情绪转成策略，杀伤力会更稳。',
    rule: { primary: 'rebel', secondary: 'slack' },
  },
];

export const fallbackByPrimary: Record<DimensionKey, string> = {
  endure: 'iron-mule',
  internal: 'mute-volcano',
  rebel: 'office-punk',
  slack: 'anti-clockin-artist',
};
