"use client";
import {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  useMemo,
} from "react";

import clsx from "clsx";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./select.module.css";

type Props = {
  floating?: boolean;
  title?: string;
  placeholder?: string;
  options: SelectOptionType[];
  selectedOption?: SelectOptionType;
  onSelectedOptionChange?: (value: SelectOptionType) => void;
  onIsOpenChange?: (value: boolean) => void;
};

export default function SelectComponent({
  floating,
  title,
  placeholder,
  options,
  selectedOption,
  onSelectedOptionChange,
  onIsOpenChange,
}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const maximumCharactersCount = useMemo(() => {
    const numbersArr = [...options.map((option) => option.label.length)];

    const numbersLength = placeholder?.length
      ? 1 + numbersArr.length
      : numbersArr.length;

    const sum = numbersArr.reduce((prev, curr) => {
      return prev + curr;
    }, placeholder?.length ?? 0);

    return Math.floor(sum / numbersLength);
  }, [placeholder, options]);

  const selectOption = useCallback(
    (option: SelectOptionType): void => {
      if (option !== selectedOption) {
        onSelectedOptionChange?.(option);
      }
    },
    [onSelectedOptionChange, selectedOption],
  );

  const optionClickHandler = (
    e: MouseEvent<HTMLLIElement>,
    option: SelectOptionType,
  ): void => {
    e.stopPropagation();

    selectOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
    }

    onIsOpenChange?.(isOpen);
  }, [isOpen, onIsOpenChange]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      return;
    }

    const keydownHandler = (e: KeyboardEvent): void => {
      if (e.target != containerRef.current) {
        return;
      }

      switch (e.code) {
        case "Enter":
        case "Space": {
          e.preventDefault();

          if (isOpen) {
            selectOption(options[highlightedIndex]);
          }

          setIsOpen((prev) => !prev);

          break;
        }
        case "ArrowUp":
        case "ArrowDown": {
          e.preventDefault();

          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }

          break;
        }
        case "Escape": {
          e.preventDefault();

          setIsOpen(false);
          break;
        }
      }
    };

    containerElement.addEventListener("keydown", keydownHandler);

    return () => {
      containerElement.removeEventListener("keydown", keydownHandler);
    };
  }, [isOpen, highlightedIndex, options, selectOption]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((old) => !old)}
      tabIndex={0}
      className={clsx(
        styles.container,
        isOpen && styles.open,
        floating && styles.floating,
      )}
    >
      {title && <span className={styles.title}>{title}: </span>}

      <span
        className={styles.value}
        style={{
          minInlineSize: `${maximumCharactersCount}ch`,
        }}
      >
        {selectedOption?.label ?? placeholder ?? String.fromCharCode(160)}
      </span>

      <div className={styles.caret}></div>

      <ul className={styles.options}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={clsx(
              styles.option,
              option.value === selectedOption?.value && styles.selected,
              index === highlightedIndex && styles.highlighted,
            )}
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => optionClickHandler(e, option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
