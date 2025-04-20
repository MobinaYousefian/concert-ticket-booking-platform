"use client";
import { FormEvent, ReactElement, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { fetchWithToast } from "@/utils/fetch.utils";

import { SignInDto } from "@/dto/auth.dto";

import BackButtonComponent from "@/components/back-button/back-button.component";
import InputComponent from "@/components/input/input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import LoadingSpinnerComponent from "@/components/loading-spinner/loading-spinner.component";
import ButtonComponent from "@/components/button/button.component";

import HugeiconsUserAccount from "@/icons/HugeiconsUserAccount";

import signIpPic from "@/assets/images/spotlight.webp";

import styles from "../../styles/auth.module.css";

export default function SignInComponent(): ReactElement {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitForm = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const dto: SignInDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-in",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "خوش آمدید!",
    );

    setIsLoading(false);

    if (result.error) return;

    formRef.current?.reset();
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
            <h1>ورود</h1>
            <p>با اطلاعات حساب خود وارد شوید</p>
          </div>
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmitForm}
          >
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
            <ButtonComponent className={styles.button}>
              {isLoading ? <LoadingSpinnerComponent /> : "ورود"}
            </ButtonComponent>
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
