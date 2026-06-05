import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <div className="text-8xl font-bold font-display text-gradient mb-4">404</div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Page Not Found</h1>
        <p className="text-[var(--text-muted)] mb-8">
          Looks like this page wandered off into the void.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
