// Imports
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

// Parameters Interface
interface OptionalLinkParameters {
  className?: string;
  style?: CSSProperties;
  to?: string;
  onClick?: () => void;
  children: ReactNode;
}

// Export Component
export default function OptionalLink({
  className = "",
  style = {},
  to = "",
  onClick = () => {},
  children,
}: OptionalLinkParameters) {
  return (
    <>
      {to ? (
        <Link className={className} style={style} href={to} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <div className={className} style={style} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
}
