"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { LOCALE_STORAGE_KEY, type Locale } from "@/core/i18n/types";
import { translations, type Translations } from "@/core/i18n/translations";

const LOCALE_CHANGE_EVENT = "g-scores-locale-change";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getLocaleSnapshot(): Locale {
  return localStorage.getItem(LOCALE_STORAGE_KEY) === "vi" ? "vi" : "en";
}

function getServerLocaleSnapshot(): Locale {
  return "en";
}

function subscribeLocale(onStoreChange: () => void) {
  const notify = () => onStoreChange();
  window.addEventListener(LOCALE_CHANGE_EVENT, notify);
  window.addEventListener("storage", notify);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, notify);
    window.removeEventListener("storage", notify);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function useTranslation() {
  return useLocale().t;
}
