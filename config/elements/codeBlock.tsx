import styles from "./codeBlock.module.css";
import CopyButton from "./CopyButton";

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
};

const extractTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join("");
  }

  if (typeof node === "object" && "props" in node) {
    const { props } = node as any;
    if (props.children) {
      return extractTextContent(props.children);
    }
  }

  return "";
};

export const codeBlock = {
  figure: ({ children, className }: CodeBlockProps) => {
    const language = className ? className.replace("language-", "") : "";
    const textContent = extractTextContent(children);

    return (
      <figure className={styles.codeBlockWrapper}>
        <div className={styles.codeHeader}>
          {language && <span className={styles.language}>{language}</span>}
          <CopyButton text={textContent} />
        </div>
        <pre className={styles.pre}>
          <code className={`${styles.code} ${className || ""}`}>
            {children}
          </code>
        </pre>
      </figure>
    );
  },
};
