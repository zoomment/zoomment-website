import Link from "next/link";
import Example from "@/components/Example";
import { Widget } from "@/components/Widget";
import styles from "./home.module.css";

const GUIDES = [
  { slug: "step-by-step-integrate-comments-jekyll-blog", name: "Jekyll" },
  { slug: "step-by-step-integrate-comments-hugo-blog", name: "Hugo" },
  { slug: "step-by-step-integrate-comments-reactjs", name: "React" },
  { slug: "step-by-step-integrate-comments-adobe-muse", name: "Adobe Muse" },
];

const EXTRAS = [
  { word: "❤️ 😀 💡", label: "Emoji reactions, your own set" },
  { word: "Replies", label: "Threaded replies" },
  { word: "Ding!", label: "Email when someone comments" },
  { word: "RSS", label: "A feed of every new comment" },
  { word: "Views", label: "Page view counts" },
  { word: "Moderate", label: "A dashboard to look after it all" },
];

export default function Home() {
  return (
    <div className={`container ${styles.home}`}>
      <section className={styles.masthead}>
        <h1 className="display display--xl">
          Let your readers <mark>talk back</mark>
        </h1>
        <p className={styles.promise}>
          Free, open-source comments for any website. Paste one snippet, and
          readers can reply without a GitHub account.
        </p>
      </section>

      <section className={`strip ${styles.strip}`} aria-label="How it works">
        <div className={`panel panel--magenta ${styles.p1}`}>
          <span className="caption">1. Your post</span>
          <div className={styles.page} aria-hidden="true">
            <div className={styles.pageBar}>
              <i />
              <i />
              <i />
              <span>yourblog.dev</span>
            </div>
            <div className={styles.pageBody}>
              <b className={styles.lineTitle} />
              <b />
              <b />
              <b style={{ width: "82%" }} />
              <b />
              <b style={{ width: "64%" }} />
              <div className={styles.dropZone}>comments go here</div>
            </div>
          </div>
        </div>

        <div className={`panel ${styles.p2}`}>
          <span className="caption">2. Paste this in</span>
          <Example lng="en" theme="light" />
          <p className={styles.hint}>
            Put it where the comments should appear. That&apos;s the whole
            install.
          </p>
        </div>

        <div className={`panel panel--yellow ${styles.p3}`}>
          <span className="caption">3. They talk back</span>
          <div className={styles.balloons}>
            <span className={`balloon pop-in ${styles.b1}`}>
              Great post! Fixed my build in one go.
            </span>
            <span className={`balloon balloon--right pop-in ${styles.b2}`}>
              ❤️ 💡 😀
            </span>
            <span className={`balloon pop-in ${styles.b3}`}>
              Same thing on my Hugo site. Thanks!
            </span>
          </div>
          <p className={styles.sample}>Example comments</p>
        </div>
      </section>

      <svg
        className={styles.tail}
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M830 0 C 820 70, 560 40, 500 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="2 12"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <section className={`panel ${styles.live}`} aria-labelledby="live-title">
        <span className="caption">4. Your turn</span>
        <div className={styles.liveHead}>
          <h2 id="live-title" className="display display--lg">
            This one is real
          </h2>
          <p>
            The widget below is Zoomment running on this page. Leave a comment
            or a reaction and see exactly what your readers will get.
          </p>
        </div>
        <Widget />
      </section>

      <p className={`caption caption--inline ${styles.meanwhile}`}>
        Meanwhile, behind the panels…
      </p>

      <section className={styles.why} aria-label="Why Zoomment">
        <div className={`panel panel--yellow ${styles.free}`}>
          <span className="caption">Free</span>
          <p className="display display--lg">No ads. No paid tiers. Ever.</p>
          <p className={styles.copy}>
            Zoomment is paid for by people who use it, through GitHub Sponsors
            and Open Collective. Your readers never see a sponsored row.
          </p>
          <Link href="/donate" className="btn-pop btn-pop--ghost btn-pop--sm">
            How it&apos;s funded
          </Link>
        </div>

        <div className={`panel ${styles.open}`}>
          <span className="caption">Open source</span>
          <span className={`balloon ${styles.openBalloon}`}>
            Read the code. Fork it. Host it yourself.
          </span>
          <p className={styles.copy}>
            Every line is on GitHub, and you can run your own instance if you
            want full control of your data.
          </p>
          <Link href="https://github.com/zoomment" target="_blank" rel="noopener">
            github.com/zoomment
          </Link>
        </div>

        <div className={`panel panel--cyan ${styles.login}`}>
          <span className="caption">No GitHub login</span>
          <span className={`balloon balloon--right ${styles.loginBalloon}`}>
            Wait, I can just… comment?
          </span>
          <p className={styles.copy}>
            Your readers aren&apos;t all developers. They type a name and a
            comment, and that&apos;s it.
          </p>
        </div>

        <div className={`panel panel--ink ${styles.extras}`}>
          <span className="caption">All in the same snippet</span>
          <ul className={styles.extrasList}>
            {EXTRAS.map((item) => (
              <li key={item.label}>
                <span className={styles.extrasWord}>{item.word}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`panel panel--plain ${styles.guides}`}>
          <h2 className="display display--md">Works with your stack</h2>
          <p className={styles.copy}>
            Anything that serves HTML can host Zoomment. Step-by-step guides:
          </p>
          <ul className={styles.guideList}>
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/blog/${guide.slug}`}>{guide.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/blog/guide-zoomment-widget-configuration">
                All widget options
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
