import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground tracking-widest uppercase">Signal lost</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
