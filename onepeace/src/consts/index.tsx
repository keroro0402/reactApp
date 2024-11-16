import type { naviLinkType } from '@/type/types.ts';

const title: string = 'OnePeace';
const linkEl: naviLinkType = {
  title: { name: title, routerName: 'TOP' },
  top: { name: 'TOP', routerName: 'TOP' },
  about: { name: 'ABOUT', routerName: 'ABOUT' },
  info: { name: 'INFOMATION', routerName: 'INFOMATION' },
};

export { linkEl };
