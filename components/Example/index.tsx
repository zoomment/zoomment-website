import CodeBox from '@/components/CodeBox';
import Link from 'next/link';
import styles from './Example.module.css';

const ATTRS: [string, (lng: string, theme: string) => string][] = [
  ['id', () => 'zoomment'],
  ['data-theme', (_, theme) => theme],
  ['data-language', (lng) => lng],
  ['data-gravatar', () => 'monsterid'],
  ['data-emotions', () => '❤️,😀,🪄,🥸,💡,🤔,💩,😢'],
  ['data-visitors', () => 'true'],
];

const SCRIPT = 'https://cdn.zoomment.com/zoomment.min.js';

export default function Example({
  lng,
  theme,
  copyLabel = 'Copy snippet',
}: {
  lng: string;
  theme: string;
  copyLabel?: string;
}) {
  const plain =
    `<div\n` +
    ATTRS.map(([name, value]) => `  ${name}="${value(lng, theme)}"\n`).join('') +
    `></div>\n<script src="${SCRIPT}"></script>`;

  return (
    <CodeBox
      copyText={plain}
      copyLabel={copyLabel}
      corner={
        <Link
          href="/blog/guide-zoomment-widget-configuration"
          className={styles.options}
          aria-label="All widget options"
          title="All widget options"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </Link>
      }
    >
      <span className="tok-tag">&lt;div</span>
      {'\n'}
      {ATTRS.map(([name, value]) => (
        <span key={name}>
          {'  '}
          <span className="tok-attr">{name}</span>=
          <span className="tok-str">&quot;{value(lng, theme)}&quot;</span>
          {'\n'}
        </span>
      ))}
      <span className="tok-tag">&gt;&lt;/div&gt;</span>
      {'\n'}
      <span className="tok-tag">&lt;script</span> <span className="tok-attr">src</span>=
      <span className="tok-str">&quot;{SCRIPT}&quot;</span>
      <span className="tok-tag">&gt;&lt;/script&gt;</span>
    </CodeBox>
  );
}
