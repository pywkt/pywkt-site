import { codeBlocks } from './elements/codeBlocks';
import { headings } from './elements/headings';
import { hRule } from './elements/hRule';
import { images } from './elements/images';
import { links } from './elements/links';
import { text } from './elements/text';

type CustomComponents = {
  [key in string]: Function;
};

export const customComponents: CustomComponents = {
  ...codeBlocks,
  ...headings,
  ...hRule,
  ...images,
  ...links,
  ...text,
};
