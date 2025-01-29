"use client";

import { useState } from "react";
import styles from "./codeBlock.module.css";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className={styles.copyButton} onClick={handleCopy}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
