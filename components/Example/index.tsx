import CodeBox from '@/components/CodeBox';
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
    <CodeBox>
      {`<div\n`}
      {`  id="zoomment"\n`}
      {`  data-theme="${theme}"\n`}
      {`  data-language="${lng}"\n`}
      {token && (
        <>
          {`  `}
          <span
            style={{ backgroundColor: '#307721', borderRadius: 3 }}
          >{`data-token="${token}"\n`}</span>
        </>
      )}
      {`  data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"\n`}
      {`></div>\n`}
      {`<script src="https://cdn.zoomment.com/zoomment.min.js"></script>`}
    </CodeBox>
  );
}
