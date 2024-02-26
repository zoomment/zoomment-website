'use client';

import { useState } from 'react';
import Example from './Example';

export default function Builder() {
  const [theme, setTheme] = useState('light');
  const [lng, setLng] = useState('en');

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex-1 px-4">
          <div className="mb-5">
            <label
              htmlFor="theme"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select Theme
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select Language
            </label>
            <select
              id="language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            >
              <option value="en">English</option>
              <option value="hy">Armenian</option>
              <option value="hyw">Armenian (classic)</option>
              <option value="ru">Russian</option>
              <option value="zh">Simplified Chinese</option>
            </select>
          </div>
          <div className="mb-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your Code
            </label>
            <pre className="text-sm sm:text-base inline-flex text-left items-center bg-gray-800 text-white rounded-md px-2 w-full">
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
          </div>
        </div>
        <div className="flex-1 px-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Preview
          </label>
          <Example lng={lng} theme={theme} key={lng + theme} />
        </div>
      </div>
    </>
  );
}
