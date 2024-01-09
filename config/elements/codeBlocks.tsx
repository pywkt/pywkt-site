export const codeBlocks = {
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <code
      className={className}
      style={{
        borderRadius: '6px',
        marginTop: '0.6rem',
        marginBottom: '1.8rem',
      }}
    >
      {children}
    </code>
  ),
};
