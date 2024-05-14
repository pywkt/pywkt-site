import Link from "next/link";
import { siteInfo } from "@/config/siteInfo";
import styles from "./styles.module.css";

export default function Footer() {
  const { footer, footerLinks, footerTitle } = styles;
  return (
    <div className={footer}>
      <p className={footerTitle}>
        <Link href="/">{siteInfo.title}</Link>
        <span> | </span>
        <span> {siteInfo.siteDescription}</span>
      </p>
      <p className={footerLinks}>
        {siteInfo.social.map((i) => (
          <Link
            href={i.url}
            target="_blank"
            rel="noopener noreferrer"
            key={i.url}
          >
            {i.label}
          </Link>
        ))}
      </p>
    </div>
  );
}
