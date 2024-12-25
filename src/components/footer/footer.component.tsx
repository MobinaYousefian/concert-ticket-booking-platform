import { JSX, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import HugeiconsLinkedin02 from "@/icons/HugeiconsLinkedin02";
import HugeiconsYoutube from "@/icons/HugeiconsYoutube";
import HugeiconsTelegram from "@/icons/HugeiconsTelegram";
import HugeiconsInstagram from "@/icons/HugeiconsInstagram";

import tamashachiLogo from "@/assets/logo/T-logo-red.svg";
import enamadLogo from "@/assets/logo/E-namad-w.svg";
import guildLogo from "@/assets/logo/guild-w.svg";
import nrLogo from "@/assets/logo/NR-badge-w.svg";

import styles from "./footer.module.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/mobina-yousefian/";

type SocialIcons = {
  title: string;
  icon: JSX.Element;
};
const socialIcons: SocialIcons[] = [
  {
    title: "linkedin",
    icon: <HugeiconsLinkedin02 />,
  },
  {
    title: "youtube",
    icon: <HugeiconsYoutube />,
  },
  {
    title: "telegram",
    icon: <HugeiconsTelegram />,
  },
  {
    title: "instagram",
    icon: <HugeiconsInstagram />,
  },
];

type Certificate = {
  alt: string;
  logo: string;
};
const certificates: Certificate[] = [
  {
    alt: "نظام صنفی",
    logo: guildLogo,
  },
  {
    alt: "نشان ملی ثبت",
    logo: nrLogo,
  },
  {
    alt: "اینماد",
    logo: enamadLogo,
  },
];

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.branding}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image
              src={tamashachiLogo}
              alt={"تماشاچی"}
              width={56}
              height={56}
            />
          </Link>
          <div>تماشاچی</div>
        </div>
        <p className={styles.description}>
          پلتفرم خرید بلیط کنسرت‌ها و تئاترهای سراسر کشور
        </p>
      </div>
      <div className={styles.socials}>
        <ul className={styles.certificate}>
          {certificates.map(({ alt, logo }) => (
            <li key={alt}>
              <Link href={"/"}>
                <Image src={logo} alt={alt} />
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          {socialIcons.map(({ title, icon }) => (
            <li key={title}>
              <Link href={LINKEDIN_URL} target={"_blank"}>
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به‌
        <a href={LINKEDIN_URL} target={"_blank"}>
          مبینا یوسفیان‌
        </a>
        می‌باشد.
      </p>
    </footer>
  );
}
