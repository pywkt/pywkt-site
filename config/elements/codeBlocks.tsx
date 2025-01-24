export const codeBlocks = {
  figure: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => <figure className={className}>{children}</figure>,
};
