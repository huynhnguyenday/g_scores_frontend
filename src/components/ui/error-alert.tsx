export function ErrorAlert({ message }: { message: string }) {
  return (
    <p
      className="rounded-md bg-red-500/15 px-4 py-3 text-sm text-red-300"
      role="alert"
    >
      {message}
    </p>
  );
}
