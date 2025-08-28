// src/components/Img.tsx
import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | undefined;
  size?: number;
  fallbackSrc?: string;
};

export const Img: React.FC<Props> = ({ src, alt = "", size = 28, fallbackSrc = "assets/logos/_placeholder.svg", style, ...rest }) => {
  const base = import.meta.env.BASE_URL || "/";
  const url = src ? base + src.replace(/^\/+/, "") : base + fallbackSrc;

  return (
    <img
      src={url}
      alt={alt}
      onError={(e) => {
        const t = e.currentTarget;
        if (!t.dataset._fallback) {
          t.dataset._fallback = "1";
          t.src = base + fallbackSrc;
        }
      }}
      style={{
        height: size,
        width: size,
        objectFit: "contain",
        borderRadius: 6,
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        padding: 2,
        ...style,
      }}
      {...rest}
    />
  );
};
