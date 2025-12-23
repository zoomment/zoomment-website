import CodeBox from '@/components/CodeBox';
import { SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Example({
  lng,
  theme,
}: {
  lng: string;
  theme: string;
}) {
  return (
    <CodeBox>
      <Link href="/blog/guide-zoomment-widget-configuration">
        <SettingOutlined
          style={{
            position: 'absolute',
            right: 14,
            color: '#fff',
            top: 16,
            fontSize: 20,
            cursor: 'pointer',
          }}
        />
      </Link>
      {`<div\n`}
      {`  id="zoomment"\n`}
      {`  data-theme="${theme}"\n`}
      {`  data-language="${lng}"\n`}
      {`  data-gravatar="monsterid"\n`}
      {`  data-emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"\n`}
      {`  data-visitors="true"\n`}
      {`></div>\n`}
      {`<script src="https://cdn.zoomment.com/zoomment.min.js"></script>`}
    </CodeBox>
  );
}
