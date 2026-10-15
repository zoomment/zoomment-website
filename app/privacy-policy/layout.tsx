import { ReactNode } from "react";
import AntdProvider from "@/components/AntdProvider";

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return <AntdProvider>{children}</AntdProvider>;
}
