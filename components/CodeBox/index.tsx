'use client';
import { ReactNode, useRef, useState } from 'react';
import styles from './CodeBox.module.css';

type Props = {
  children: ReactNode;
  // Plain text placed on the clipboard; omit to hide the copy button.
  copyText?: string;
  copyLabel?: string;
  corner?: ReactNode;
};

export default function CodeBox({
  children,
  copyText,
  copyLabel = 'Copy',
  corner,
}: Props) {
  const preRef = useRef<HTMLPreElement>(null);
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [burst, setBurst] = useState(0);

  const onCopy = async () => {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
      setState('copied');
      setBurst((n) => n + 1);
    } catch {
      // Clipboard blocked: select the code so the visitor can copy by hand.
      const selection = window.getSelection();
      if (preRef.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(preRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setState('failed');
    }
    window.setTimeout(() => setState('idle'), 2200);
  };

  return (
    <div className={styles.wrap}>
      <pre ref={preRef} className="snippet">
        {children}
      </pre>
      {corner && <div className={styles.corner}>{corner}</div>}
      {copyText && (
        <div className={styles.actions}>
          <button type="button" className="btn-pop" onClick={onCopy}>
            {state === 'copied'
              ? 'Copied!'
              : state === 'failed'
              ? 'Press ⌘C / Ctrl+C'
              : copyLabel}
          </button>
          <span className={styles.status} role="status" aria-live="polite">
            {state === 'copied' ? 'Snippet copied to clipboard' : ''}
          </span>
          {burst > 0 && state === 'copied' && (
            <span key={burst} className={`sfx ${styles.sfx}`} aria-hidden="true">
              Klak!
            </span>
          )}
        </div>
      )}
    </div>
  );
}
