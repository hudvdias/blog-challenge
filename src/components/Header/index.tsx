import Link from 'next/link';
import Image from 'next/image';

import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={`${commonStyles.container} ${styles.header}`}>
      <Link href='/'>
        <a>
          <Image src="/logo.svg" alt="logo" width="239" height="26" />
        </a>
      </Link>
    </header>
  );
}
