import React, { ReactElement } from "react";

import "./auth-global.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return <main className="auth-main">{children}</main>;
}
