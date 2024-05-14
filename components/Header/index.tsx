import Link from "next/link";
import { siteInfo } from "@/config/siteInfo";
import styles from "./styles.module.css";

export default function Header() {
  const { header } = styles;
  return (
    <div className={header}>
      <Link href="/">
        <h1>{siteInfo.title}</h1>
      </Link>
    </div>
  );
}
