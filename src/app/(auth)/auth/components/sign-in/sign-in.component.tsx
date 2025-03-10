import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import BackButtonComponent from "@/components/back-button/back-button.component";
import InputComponent from "@/components/input/input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

import HugeiconsUserAccount from "@/icons/HugeiconsUserAccount";
import ButtonComponent from "@/components/button/button.component";

import signIpPic from "@/assets/images/spotlight.webp";

import styles from "../../styles/auth.module.css";

export default function SignInComponent(): ReactElement {
  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <BackButtonComponent
          backUrl={"/"}
          label="بازگشت به خانه"
          className={styles.back}
        />
        <div className={styles.writings}>
          <div className={styles.heading}>
            <h1>ورود</h1>
            <p>با اطلاعات حساب خود وارد شوید</p>
          </div>
          <form className={styles.form}>
            <InputComponent
              type="text"
              name="username"
              placeholder="نام کاربری"
              prefixIcon={<HugeiconsUserAccount />}
              className={styles.input}
            />
            <PasswordInputComponent
              name="password"
              placeholder="رمز عبور"
              autoComplete="current-password"
              className={styles.input}
            />
            <ButtonComponent className={styles.button}>ورود</ButtonComponent>
          </form>
          <div className={styles.help}>
            حساب کاربری ندارید؟ <Link href={"/auth/sign-up"}>ثبت‌نام کنید</Link>
          </div>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image src={signIpPic} alt="" priority />
      </div>
    </div>
  );
}
