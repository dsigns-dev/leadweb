"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to?: string;
  href?: string;
  params?: Record<string, string>;
  search?: Record<string, string | number | boolean | undefined | null>;
  activeProps?: {
    className?: string;
    style?: React.CSSProperties;
    [key: string]: unknown;
  };
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, params, search, activeProps, className, style, ...props }, ref) => {
    let resolvedHref = href || to || "";

    // Resolve dynamic path parameters (e.g., /blog/$slug with params={ slug: "..." })
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        resolvedHref = resolvedHref.replace(`$${key}`, encodeURIComponent(value));
      });
    }

    // Resolve search parameters (e.g. search={ page: 1 })
    if (search) {
      const searchParams = new URLSearchParams();
      Object.entries(search).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.set(key, String(value));
        }
      });
      const searchStr = searchParams.toString();
      if (searchStr) {
        resolvedHref += `?${searchStr}`;
      }
    }

    // Determine active state for classes and styles
    const pathname = usePathname();
    const cleanPathname = pathname?.replace(/\/$/, "") || "";
    const cleanHref = resolvedHref.split("?")[0].replace(/\/$/, "");
    const isActive = cleanPathname === cleanHref;

    const mergedClassName = cn(className, isActive && activeProps?.className);

    const mergedStyle = {
      ...style,
      ...(isActive && activeProps?.style ? activeProps.style : {}),
    };

    return (
      <NextLink
        ref={ref}
        href={resolvedHref || "/"}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";
