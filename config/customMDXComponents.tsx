type CustomComponents = {
  [key in string]: any;
};

export const customComponents: CustomComponents = {
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <code className={className} style={{ borderRadius: '10px' }}>
      {children}
    </code>
  ),
};
