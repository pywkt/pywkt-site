import { headings } from './elements/headings';
import { hRule } from './elements/hRule';
import { codeBlocks } from './elements/codeBlocks';
import { links } from './elements/links';
import { text } from './elements/text';

type CustomComponents = {
  [key in string]: Function;
};

export const customComponents: CustomComponents = {
  ...codeBlocks,
  ...headings,
  ...hRule,
  ...links,
  ...text,
};
