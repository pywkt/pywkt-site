export const headings = {
  h1: ({ children }: { children: string | React.ReactNode }) => (
    <h1 style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>{children}</h1>
  ),
  h2: ({ children }: { children: string | React.ReactNode }) => (
    <h2 style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>{children}</h2>
  ),
  h3: ({ children }: { children: string | React.ReactNode }) => (
    <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{children}</h3>
  ),
  h4: ({ children }: { children: string | React.ReactNode }) => (
    <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>{children}</h4>
  ),
  h5: ({ children }: { children: string | React.ReactNode }) => (
    <h5 style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{children}</h5>
  ),
  h6: ({ children }: { children: string | React.ReactNode }) => (
    <h6 style={{ fontWeight: 'bold', fontSize: '0.6rem' }}>{children}</h6>
  ),
};
