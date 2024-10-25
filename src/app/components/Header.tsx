import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="py-4 pl-4">
        <span className="text-xl">
          <Link href="/">/Pixel/Perfect</Link>
        </span>
      </div>
    </header>
  );
};
