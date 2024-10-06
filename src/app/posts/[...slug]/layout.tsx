import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <main className="w-[712px] border border-dotted border-gray-600">
        {children}
      </main>
      {/* <ToC /> */}
    </div>
  );
}
