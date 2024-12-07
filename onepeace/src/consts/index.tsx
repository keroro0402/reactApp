import type { naviLinkType } from '@/type/types.ts';
import { EmblaOptionsType } from 'embla-carousel';

const title: string = 'OnePeace';
const linkEl: naviLinkType = {
  title: { name: title, url: './' },
  top: { name: 'TOP', url: './' },
  info: { name: 'INFOMATION', url: './info' },
};

const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 4;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const CAROUSELCONFIG = {
  OPTIONS: OPTIONS,
  // SLIDES: SLIDES,
};

export { linkEl, CAROUSELCONFIG };
