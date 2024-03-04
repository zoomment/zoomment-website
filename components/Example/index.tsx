'use client';
import Script from 'next/script';

export default function Example({
  lng,
  theme,
  token,
}: {
  lng: string;
  theme: string;
  token?: string;
}) {
  return (
    <div>
      <pre className="overflow-auto text-sm text-left items-center bg-gray-800 text-white rounded-md px-2 py-4 w-full">
        {` <div\n`}
        {`   id="zoomment"\n`}
        {`   data-theme="${theme}"\n`}
        {`   data-language="${lng}"\n`}
        {token && (
          <>
            {`   `}
            <span
              style={{ backgroundColor: '#307721', borderRadius: 3 }}
            >{`data-token="${token}"\n`}</span>
          </>
        )}
        {`   data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"\n`}
        {` ></div>\n`}
        {` <script src='https://cdn.zoomment.com/zoomment.min.js'></script>`}
      </pre>
    </div>
  );
}
