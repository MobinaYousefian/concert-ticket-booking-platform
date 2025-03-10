"use client";
import { FormEvent, ReactElement, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { fetchWithToast } from "@/utils/fetch.utils";

import { SignUpDto } from "@/dto/auth.dto";

import BackButtonComponent from "@/components/back-button/back-button.component";
import InputComponent from "@/components/input/input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import ButtonComponent from "@/components/button/button.component";
import LoadingSpinnerComponent from "@/components/loading-spinner/loading-spinner.component";

import HugeiconsUserAccount from "@/icons/HugeiconsUserAccount";
import HugeiconsUser from "@/icons/HugeiconsUser";
import HugeiconsMail01 from "@/icons/HugeiconsMail01";

import signUpPic from "@/assets/images/venetain-mask2.webp";

import styles from "../../styles/auth.module.css";

export default function SignUpComponent(): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitForm = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "ثبت‌نام با موفقیت انجام شد",
    );

    setIsLoading(false);

    if (result.error) return;

    formRef.current?.reset();
    /* todo: redirect the user back to where they came from */
    router.push("/dashboard");
  };

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
            <h1>ثبت‌نام</h1>
            <p>اطلاعات خواسته شده را وارد کنید</p>
          </div>
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmitForm}
          >
            <InputComponent
              type="text"
              name="name"
              placeholder="نام و نام‌خانوادگی"
              prefixIcon={<HugeiconsUser />}
              className={styles.input}
            />
            <InputComponent
              type="text"
              name="username"
              placeholder="نام کاربری"
              prefixIcon={<HugeiconsUserAccount />}
              className={styles.input}
            />
            <InputComponent
              type="email"
              name="email"
              placeholder="ایمیل"
              prefixIcon={<HugeiconsMail01 />}
              className={styles.input}
            />
            <PasswordInputComponent
              name="password"
              placeholder="رمز عبور"
              autoComplete="new-password"
              className={styles.input}
            />
            <ButtonComponent className={styles.button}>
              {isLoading ? <LoadingSpinnerComponent /> : "ثبت‌نام"}
            </ButtonComponent>
          </form>
          <div className={styles.help}>
            قبلا ثبت‌نام کرده‌اید؟ <Link href={"/auth/sign-in"}>وارد شوید</Link>
          </div>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image src={signUpPic} alt="" priority />
      </div>
    </div>
  );
}
