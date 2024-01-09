export const codeBlocks = {
  figure: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <figure
      className={className}
      style={{
        borderRadius: '10px',
        marginTop: '0.6rem',
        marginBottom: '1.8rem',
      }}
    >
      {children}
    </figure>
  ),
  // pre: ({ children }: { children: any }) => <pre style={{ maxWidth: '400px'}}>{children}</pre>
};
