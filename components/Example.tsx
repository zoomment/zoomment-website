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
    // <iframe
    //   key={lng + theme}
    //   style={{ height: '400px' }}
    //   className="w-full"
    //   srcDoc={`
    //           <html>
    //           <head>
    //             <link rel="preconnect" href="https://fonts.googleapis.com">
    //             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    //             <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Noto+Sans:ital@0;1&display=swap" rel="stylesheet">
    //             <style>
    //               * {
    //                 font-family: 'Noto Sans';
    //               }
    //             </style>
    //           </head>
    //           <body>

    //           </body>
    //         `}
    //   frameBorder="0"
    // ></iframe>

    <>
      <div
        id="zoomment"
        className="w-full"
        data-theme={theme}
        data-language={lng}
        data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
        data-api-url="https://api.zoomment.com/api"
      ></div>
      <Script src="https://cdn.zoomment.com/zoomment.min.js"></Script>
    </>
  );
}
