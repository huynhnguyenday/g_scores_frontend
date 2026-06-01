"use client";

import { useLocale } from "@/core/i18n/locale-provider";
import type { Locale, ThemeMode } from "@/core/i18n/types";
import { useTheme } from "@/core/theme/theme-provider";
import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";

const LANGUAGE_OPTIONS: { value: Locale; labelVi: string; labelEn: string }[] =
  [
    { value: "vi", labelVi: "Tiếng Việt", labelEn: "Vietnamese" },
    { value: "en", labelVi: "Tiếng Anh", labelEn: "English" },
  ];

const THEME_OPTIONS: {
  value: ThemeMode;
  labelVi: string;
  labelEn: string;
}[] = [
  { value: "dark", labelVi: "Giao diện tối", labelEn: "Dark theme" },
  { value: "light", labelVi: "Giao diện sáng", labelEn: "Light theme" },
];

export default function SettingsPage() {
  const { locale, setLocale, t } = useLocale();
  const { theme, setTheme } = useTheme();

  const languageOptions = LANGUAGE_OPTIONS.map((opt) => ({
    value: opt.value,
    labelPrimary: opt.labelVi,
    labelSecondary: opt.labelEn,
  }));

  const themeOptions = THEME_OPTIONS.map((opt) => ({
    value: opt.value,
    labelPrimary: opt.labelVi,
    labelSecondary: opt.labelEn,
  }));

  return (
    <div className="mx-auto max-w-lg">
      <Card title={t.settings.title}>
        <div className="flex flex-col gap-8">
          <section>
            <h3 className="mb-4 font-medium text-g-text">{t.settings.language}</h3>
            <RadioGroup
              name="locale"
              value={locale}
              options={languageOptions}
              onChange={setLocale}
            />
          </section>

          <section className="border-t border-g-border pt-8">
            <h3 className="mb-4 font-medium text-g-text">{t.settings.theme}</h3>
            <RadioGroup
              name="theme"
              value={theme}
              options={themeOptions}
              onChange={setTheme}
            />
          </section>
        </div>
      </Card>
    </div>
  );
}
