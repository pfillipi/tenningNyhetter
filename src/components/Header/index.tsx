import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/nyheter.svg" alt="tsNyheter" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Hjemmesiden</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Bidragene</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
