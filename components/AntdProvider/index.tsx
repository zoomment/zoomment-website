import { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { theme } from "@/app/theme";

// Only routes that render antd components wrap themselves in this, so
// marketing and blog pages ship without the antd runtime.
export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
