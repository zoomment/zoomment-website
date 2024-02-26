'use client';

export default function Example({
  lng,
  theme,
}: {
  lng: string;
  theme: string;
}) {
  return (
    <iframe
      key={lng + theme}
      className="w-full h-full min-h-80"
      srcDoc={`
              <html>
              <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Noto+Sans:ital@0;1&display=swap" rel="stylesheet">
                <style>
                  * {
                    font-family: 'Noto Sans';
                  }
                </style>
              </head>
              <body>
                <div
                  id="zoomment"
                  className="w-full"
                  data-theme=${theme}
                  data-language=${lng}
                  data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
                  data-api-url="https://api.zoomment.com/api"
                  ></div>
                  <script src="https://cdn.zoomment.com/zoomment.min.js" ></script>
              </body>
            `}
      frameBorder="0"
    ></iframe>
  );
}
