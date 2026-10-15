"use client";

import { useLayoutEffect } from "react";
import styles from "./Widget.module.css";

export const Widget = () => {
  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.zoomment.com/zoomment.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <div className={styles.widget}>
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
