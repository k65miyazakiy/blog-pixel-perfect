import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <main>{children}</main>
    </div>
  );
}
