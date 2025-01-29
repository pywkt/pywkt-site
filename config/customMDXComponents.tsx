import { images } from "./elements/images";
import { links } from "./elements/links";
import { codeBlock } from "./elements/codeBlock";

type Components = {
  a: React.ComponentType<{ href: string; children: string }>;
  img: React.ComponentType<{ src: string; alt: string }>;
  figure: React.ComponentType<{ children: string; className?: string }>;
};

export const customComponents: Components = {
  ...images,
  ...links,
  ...codeBlock,
};
