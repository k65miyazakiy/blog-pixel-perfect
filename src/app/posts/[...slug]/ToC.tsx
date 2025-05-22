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
    return id === activeId
      ? "text-solarized-blue font-medium"
      : "text-solarized-muted";
  };

  return (
    <div className="border-solarized-darker bg-solarized-dark border p-4 font-mono">
      <div className="text-solarized-muted mb-2 text-xs">
        ┌─ ToC ──────────────────────────────────┐
      </div>
      <div className="px-2">
        <h2 className="text-solarized-green mb-3 text-xs font-medium">
          $ cat outline.md
        </h2>
        <ul className="space-y-1">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-solarized-blue block text-xs leading-relaxed transition-colors duration-300 ${activeCss(item.id)}`}
                title={item.value}
              >
                <span className="text-solarized-cyan inline-block w-3">▸</span>
                <span className="break-words">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-solarized-muted mt-2 text-xs">
        └────────────────────────────────────────┘
      </div>
    </div>
  );
};

export default ToC;
