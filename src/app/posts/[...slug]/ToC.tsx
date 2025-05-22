"use client";
import { useEffect, useState } from "react";

interface ToCItem {
  value: string;
  id: string;
}

interface ToCProps {
  toc: ToCItem[];
}

type ToCOffset = {
  id: string;
  offsetTop: number;
};

const ToC: React.FC<ToCProps> = ({ toc }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets: ToCOffset[] = toc
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            return {
              id: item.id,
              offsetTop: element.offsetTop,
            };
          }
          return null;
        })
        .filter(Boolean) as { id: string; offsetTop: number }[];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // 現在のスクロール位置より上にあるH2要素のうち、最も近いものを取得
      let activeItem: ToCOffset | undefined;
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPosition >= offsets[i].offsetTop) {
          if (activeItem) {
            if (activeItem.offsetTop < offsets[i].offsetTop) {
              activeItem = offsets[i];
            } else {
              continue;
            }
          } else {
            activeItem = offsets[i];
          }
        }
      }

      setActiveId(activeItem ? activeItem.id : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  const activeCss = (id: string) => {
    return id === activeId ? "text-solarized-blue font-medium" : "text-solarized-muted";
  };

  return (
    <div className="border border-solarized-darker bg-solarized-dark p-4 font-mono">
      <div className="mb-2 text-solarized-muted text-xs">
        ┌─ Table of Contents ─────────────────────────────────┐
      </div>
      <div className="px-2">
        <h2 className="text-xs font-medium text-solarized-green mb-3">$ cat outline.md</h2>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-xs transition-colors duration-300 hover:text-solarized-blue ${activeCss(item.id)}`}
              >
                <span className="text-solarized-cyan">▸</span> {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2 text-solarized-muted text-xs">
        └─────────────────────────────────────────────────────────┘
      </div>
    </div>
  );
};

export default ToC;
