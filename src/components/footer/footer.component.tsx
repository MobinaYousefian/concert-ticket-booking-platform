import { ReactElement } from "react";
import Link from "next/link";

import HugeiconsLinkedin02 from "@/icons/HugeiconsLinkedin02";
import HugeiconsYoutube from "@/icons/HugeiconsYoutube";
import HugeiconsTelegram from "@/icons/HugeiconsTelegram";
import HugeiconsInstagram from "@/icons/HugeiconsInstagram";
import TamashachiLogo from "@/logo/t-colored-logo";

import ENamad from "@/assets/logo/e-namad";
import Senf from "@/assets/logo/senf";
import SabtMeli from "@/assets/logo/sabt-meli";

import styles from "./footer.module.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/mobina-yousefian/";

type SocialIcons = {
  alt: string;
  icon: ReactElement;
};
const socialIcons: SocialIcons[] = [
  {
    alt: "linkedin",
    icon: <HugeiconsLinkedin02 />,
  },
  {
    alt: "youtube",
    icon: <HugeiconsYoutube />,
  },
  {
    alt: "telegram",
    icon: <HugeiconsTelegram />,
  },
  {
    alt: "instagram",
    icon: <HugeiconsInstagram />,
  },
];

type Certificate = {
  alt: string;
  logo: ReactElement;
};
const certificates: Certificate[] = [
  {
    alt: "نظام صنفی",
    logo: <Senf />,
  },
  {
    alt: "نشان ملی ثبت",
    logo: <SabtMeli />,
  },
  {
    alt: "اینماد",
    logo: <ENamad />,
  },
];

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.branding}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <TamashachiLogo />
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
              <Link href={"/"}>{logo}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          {socialIcons.map(({ alt, icon }) => (
            <li key={alt}>
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
