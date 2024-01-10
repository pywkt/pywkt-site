// Todo: Add button to copy code to clipboard.

export const codeBlocks = {
  figure: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => <figure className={className}>{children}</figure>,
};
