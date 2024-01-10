import { images } from './elements/images';
import { links } from './elements/links';

type CustomComponents = {
  [key in string]: Function;
};

export const customComponents: any = {
  ...images,
  ...links,
};
