"use client";
import { ComponentProps, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import styles from "./header.module.css";

type NavMenu = {
  url: string;
  title: string;
};
const navMenu: NavMenu[] = [
  {
    url: "/",
    title: "خانه",
  },
  {
    url: "/search",
    title: "جستجو",
  },
];

type Props = ComponentProps<"header">;

export default function HeaderComponent({ className }: Props): ReactElement {
  const pathname = usePathname();

  return (
    <header className={clsx(styles.header, className)}>
      <nav>
        <ul>
          {navMenu.map(({ url, title }) => (
            <li key={title}>
              <Link
                href={url}
                className={clsx(pathname === url && styles.active)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.cta}>
        <Link href={"/auth/sign-up"}>
          <ButtonComponent shape="outline" className={styles.login}>
            ثبت‌نام | ورود
          </ButtonComponent>
        </Link>
      </div>
    </header>
  );
}
