import Link from "next/link";
import { LINKEDIN_URL } from "@/components/site-data";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-lg font-extrabold">HK Advisory</p>
          <div className="flex items-center gap-5 text-sm font-bold">
            <a
              className="inline-flex items-center gap-2 text-white transition hover:text-lavender"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <Link className="text-white transition hover:text-lavender" href="/book">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-white/75">© 2026 HK Advisory</p>
      </div>
    </footer>
  );
}
