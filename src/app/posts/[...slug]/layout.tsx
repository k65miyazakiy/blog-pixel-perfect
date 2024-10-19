import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <main className="w-[768px]">{children}</main>
      {/* <ToC /> */}
    </div>
  );
}
