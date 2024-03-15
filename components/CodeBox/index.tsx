import { ReactNode } from 'react';
import { Typography } from 'antd';

export default function CodeBox({ children }: { children: ReactNode }) {
  return (
    <Typography>
      <pre
        style={{
          background: '#1f2937',
          color: '#fff',
          padding: '12px 16px',
          fontSize: 13,
          borderRadius: 6,
          position: 'relative',
        }}
      >
        {children}
      </pre>
    </Typography>
  );
}
