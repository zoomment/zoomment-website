"use client";

import { useEffect, useRef } from "react";
import { preconnect } from "react-dom";
import styles from "./Widget.module.css";

const SCRIPT_SRC = "https://cdn.zoomment.com/zoomment.min.js";

export const Widget = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Warm up the connection early; the script itself waits until it's needed.
  preconnect("https://cdn.zoomment.com");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let script: HTMLScriptElement | null = null;
    const load = () => {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    // The widget usually sits below the fold: load it as it nears the viewport.
    if (!("IntersectionObserver" in window)) {
      load();
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer.disconnect();
            load();
          }
        },
        { rootMargin: "600px 0px" }
      );
      observer.observe(node);
      return () => {
        observer.disconnect();
        script?.remove();
      };
    }

    return () => {
      script?.remove();
    };
  }, []);

  return (
    <div className={styles.widget} ref={ref}>
      <div
        id="zoomment"
        data-theme="light"
        data-language="en"
        data-gravatar="monsterid"
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
        data-visitors="true"
      >
        <div className={styles.loading} aria-label="Loading comments">
          <div className={styles.reactions}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <div className={`balloon ${styles.blank}`}>
            <span className={styles.caret} />
          </div>
        </div>
      </div>
    </div>
  );
};
