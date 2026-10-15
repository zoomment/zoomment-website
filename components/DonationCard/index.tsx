import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './DonationCard.module.css';

export const DonationCard = ({
  name,
  children,
  logo,
  url,
  tint = '',
}: {
  name: string;
  children: ReactNode;
  logo: string;
  url: string;
  tint?: string;
}) => {
  return (
    <article className={`panel panel--plain ${tint} ${styles.card}`}>
      <div className={styles.logo}>
        <Image src={logo} width={64} height={64} alt="" />
      </div>
      <h2 className="display display--lg">{name}</h2>
      <p className={styles.body}>{children}</p>
      <Link href={url} target="_blank" rel="noopener" className="btn-pop">
        Donate on {name}
      </Link>
    </article>
  );
};
