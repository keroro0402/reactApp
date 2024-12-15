import type { naviLinkType, Comment, MessageType } from '@/type/types.ts';
import { EmblaOptionsType } from 'embla-carousel';

const title: string = 'OnePeace';
const linkEl: naviLinkType = {
  title: { name: title, url: './' },
  subNavi: {
    top: { name: 'TOP', url: './' },
    info: { name: 'INFOMATION', url: './info' },
    todo: { name: 'TODO', url: './todo' },
  },
};

const OPTIONS: EmblaOptionsType = { loop: true };
const CAROUSELCONFIG = {
  OPTIONS: OPTIONS,
};

const COMMENTARRAY: Comment[] = [
  {
    id: 1,
    comment: 'テストコメント１',
  },
  {
    id: 2,
    comment: 'テストコメント２',
  },
  {
    id: 3,
    comment: 'テストコメント３',
  },
  {
    id: 4,
    comment: 'テストコメント４',
  },
];

const MESSAGES: MessageType = {
  complete: '完了',
  add: '追加',
  nothingTodo: '登録された予定はありません',
};

export { linkEl, CAROUSELCONFIG, COMMENTARRAY, MESSAGES };
