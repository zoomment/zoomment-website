import { ReactNode } from "react";
import AntdProvider from "@/components/AntdProvider";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AntdProvider>{children}</AntdProvider>;
}
