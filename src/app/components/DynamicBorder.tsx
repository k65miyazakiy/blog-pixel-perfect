"use client";
import { useEffect, useRef, useState } from "react";

interface DynamicBorderProps {
  label: string;
  type?: "top" | "bottom";
}

const PADDING_OFFSET = 48; // paddingを差し引くためのオフセット

export const DynamicBorder: React.FC<DynamicBorderProps> = ({
  label,
  type = "top",
}) => {
  const [borderChars, setBorderChars] = useState("─".repeat(50));
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateBorderWidth = () => {
      if (!containerRef.current || !measureRef.current) return;

      const container = containerRef.current.parentElement;
      if (!container) return;

      const containerWidth = container.clientWidth - PADDING_OFFSET; // paddingを差し引く

      // 測定用の要素で必要な幅を計算
      if (type === "top") {
        measureRef.current.textContent = `┌─ ${label} `;
        const usedWidth = measureRef.current.offsetWidth;
        const endCharWidth = 10; // "┐" の幅の推定
        const availableWidth = containerWidth - usedWidth - endCharWidth;

        // 一文字の幅を測定
        measureRef.current.textContent = "─";
        const charWidth = measureRef.current.offsetWidth;

        const numChars = Math.max(Math.floor(availableWidth / charWidth), 0);
        setBorderChars("─".repeat(numChars));
      } else {
        // bottomは上の枠線より1文字分長くする
        measureRef.current.textContent = "─";
        const charWidth = measureRef.current.offsetWidth;
        const endCharsWidth = charWidth * 2; // "└" + "┘"
        const availableWidth = containerWidth - endCharsWidth;
        const numChars = Math.max(
          Math.floor(availableWidth / charWidth) + 1,
          1,
        ); // +1で1文字分長く
        setBorderChars("─".repeat(numChars));
      }
    };

    // 初期計算
    const timeoutId = setTimeout(updateBorderWidth, 50);

    // リサイズイベントを追加
    window.addEventListener("resize", updateBorderWidth);

    // ResizeObserverでコンテナのサイズ変更を監視
    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current?.parentElement) {
      resizeObserver = new ResizeObserver(updateBorderWidth);
      resizeObserver.observe(containerRef.current.parentElement);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateBorderWidth);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [label, type]);

  if (type === "top") {
    return (
      <div
        ref={containerRef}
        className="text-solarized-muted mb-2 overflow-hidden font-mono text-sm whitespace-nowrap"
      >
        <span ref={measureRef} className="invisible absolute">
          ─
        </span>
        ┌─ {label} {borderChars}┐
      </div>
    );
  } else {
    return (
      <div
        ref={containerRef}
        className="text-solarized-muted overflow-hidden font-mono text-sm whitespace-nowrap"
      >
        <span ref={measureRef} className="invisible absolute">
          ─
        </span>
        └{borderChars}┘
      </div>
    );
  }
};
