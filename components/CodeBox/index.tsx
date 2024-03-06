import { ReactNode } from 'react';

export default function CodeBox({ children }: { children: ReactNode }) {
  return (
    <pre
      style={{ fontSize: 13 }}
      className="overflow-auto text-left items-center bg-gray-800 text-white rounded-md px-4 py-4 w-full"
    >
      {children}
    </pre>
  );
}
