import Link from "next/link";
import Styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={Styles.container}>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={Styles.item}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={Styles.item}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
