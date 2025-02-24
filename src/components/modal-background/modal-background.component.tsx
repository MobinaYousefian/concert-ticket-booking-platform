import React, {
  ReactElement,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";

import ButtonComponent from "@/components/button/button.component";

import HugeiconsCancel01 from "@/icons/HugeiconsCancel01";

import { closeModal } from "@/utils/modal.utils";

import styles from "./modal-background.module.css";

type Props = PropsWithChildren & {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ModalBackgroundComponent({
  children,
  setShowModal,
}: Props): ReactElement {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    closeModal<boolean>(setShowModal, false);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (modalRef.current && !modalRef.current.contains(target)) {
      handleClose();
    }
  };

  return (
    <div className={styles["modal-background"]} onClick={handleClickOutside}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.close}>
          <ButtonComponent shape="icon" variant="muted" onClick={handleClose}>
            <HugeiconsCancel01 />
          </ButtonComponent>
        </div>
        {children}
      </div>
    </div>
  );
}
