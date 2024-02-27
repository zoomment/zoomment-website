'use client';

import { useState } from 'react';
import Example from './Example';
import { Select, Button } from 'antd';

export default function Builder() {
  const [theme, setTheme] = useState('light');
  const [lng, setLng] = useState('en');

  return (
    <>
      <div className="px-5">
        <pre className=" overflow-auto mb-10 text-sm text-left items-center bg-gray-800 text-white rounded-md px-2 w-full">
          {`
  <div
    id="zoomment"
    data-theme="${theme}"
    data-language="${lng}"
    data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
    data-api-url="https://api.zoomment.com/api"
  ></div>
  <script src='https://cdn.zoomment.com/zoomment.min.js'></script>
        `}
        </pre>

        <Example lng={lng} theme={theme} key={lng + theme} />

        <div className=" px-4">
          {/* <div className="mb-5">
            <label
              htmlFor="theme"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select Theme
            </label>
            <Select
              id="theme"
              value={theme}
              onChange={(value) => setTheme(value)}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select Language
            </label>
            <Select
              id="language"
              value={lng}
              onChange={(value) => setLng(value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'hy', label: 'Armenian' },
                { value: 'hyw', label: 'Armenian (classic)' },
                { value: 'ru', label: 'Russian' },
                { value: 'zh', label: 'Simplified Chinese' },
              ]}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
