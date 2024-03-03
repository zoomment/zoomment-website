'use client';
import Script from 'next/script';

export default function Example({
  lng,
  theme,
}: {
  lng: string;
  theme: string;
}) {
  return (
    <div className="px-5">
      <pre className=" overflow-auto mb-10 text-sm text-left items-center bg-gray-800 text-white rounded-md px-2 w-full">
        {`
  <div
    id="zoomment"
    data-theme="${theme}"
    data-language="${lng}"
    data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
  ></div>
  <script src='https://cdn.zoomment.com/zoomment.min.js'></script>
        `}
      </pre>

      <div
        id="zoomment"
        className="w-full"
        data-theme={theme}
        data-language={lng}
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
      ></div>
      <Script src="https://cdn.zoomment.com/zoomment.min.js"></Script>
    </div>
  );
}
