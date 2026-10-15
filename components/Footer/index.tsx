import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={`panel panel--plain panel--ink ${styles.end}`}>
          <p className={`display display--md ${styles.endLine}`}>
            Every post deserves a reply.
          </p>
          <p className={styles.endNote}>
            Zoomment is free, open source and paid for by donations, not ads.
          </p>
          <Link href="/donate" className="btn-pop btn-pop--ghost btn-pop--sm">
            Chip in
          </Link>
        </div>
        <nav className={`panel panel--plain ${styles.links}`} aria-label="Footer">
          <div>
            <h2 className={styles.heading}>Zoomment</h2>
            <Link href="/benefits">Benefits</Link>
            <Link href="/donate">Donate</Link>
            <Link href="https://www.producthunt.com/posts/zoomment" target="_blank" rel="noopener">
              Product Hunt
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <h2 className={styles.heading}>Resources</h2>
            <Link href="/blog">Blog</Link>
            <Link href="/blog/guide-zoomment-widget-configuration">Widget options</Link>
            <Link href="https://github.com/zoomment" target="_blank" rel="noopener">
              Source code
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
