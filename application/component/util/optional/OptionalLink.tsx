// Imports
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

// Parameters Interface
interface OptionalLinkParameters {
  id?: string;
  className?: string;
  style?: CSSProperties;
  to?: string;
  onClick?: () => void;
  children: ReactNode;
}

// Export Component
export default function OptionalLink({
  id,
  className = "",
  style = {},
  to = "",
  onClick = () => {},
  children,
}: OptionalLinkParameters) {
  return (
    <>
      {to ? (
        <Link
          id={id}
          className={className}
          style={style}
          href={to}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <div id={id} className={className} style={style} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
}
