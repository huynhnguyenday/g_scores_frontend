"use client";

type RadioOption<T extends string> = {
  value: T;
  labelPrimary: string;
  labelSecondary: string;
};

type RadioGroupProps<T extends string> = {
  name: string;
  value: T;
  options: RadioOption<T>[];
  onChange: (value: T) => void;
};

export function RadioGroup<T extends string>({
  name,
  value,
  options,
  onChange,
}: RadioGroupProps<T>) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup">
      {options.map((option) => {
        const selected = value === option.value;
        const id = `${name}-${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 transition-colors ${
              selected
                ? "border-g-primary bg-g-primary/10"
                : "border-g-border bg-g-input hover:border-g-primary/40"
            }`}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={selected}
              onChange={() => onChange(option.value)}
              className="mt-0.5 h-4 w-4 shrink-0 self-start accent-g-primary"
            />
            <span className="flex flex-col gap-0.5">
              <span
                className={`text-sm font-medium ${
                  selected ? "text-g-text" : "text-g-text-muted"
                }`}
              >
                {option.labelPrimary}
              </span>
              <span className="text-xs text-g-text-muted">
                {option.labelSecondary}
              </span>
            </span>
          </label>
        );
      })}
    </div>
  );
}
