import Link from "next/link";

export default function AppBar() {
  return (
    <header>
      <div>
        {/* App Name */}
        <Link href="/" className="text-lg font-bold">
          FindOut
        </Link>

        {/* Account */}
        <button aria-label="Account">Login</button>
      </div>
    </header>
  );
}
