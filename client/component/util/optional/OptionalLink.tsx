// Imports
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

// Parameters Interface
interface OptionalLinkParameters {
  className?: string;
  style?: CSSProperties;
  to?: string;
  children: ReactNode;
}

// Export Component
export default function OptionalLink({
  className = "",
  style = {},
  to = "",
  children,
}: OptionalLinkParameters) {
  return (
    <>
      {to ? (
        <Link className={className} style={style} href={to}>
          {children}
        </Link>
      ) : (
        <div className={className} style={style}>
          {children}
        </div>
      )}
    </>
  );
}
