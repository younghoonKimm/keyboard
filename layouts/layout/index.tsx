import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <header>
      국립현대미술관
      {children}
    </header>
  );
}

export default Layout;
