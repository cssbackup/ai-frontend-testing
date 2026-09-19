import Image from "next/image";
import Link from "next/link";

export const footerResourceLinks = [["Help center", "/help-center"]] as const;

export const footerCompanyLinks = [
  // ["About us", "/about"],
  ["Pricing", "/pricing"],
  ["Cookie Policy", "/cookie-policy"],
] as const;

export const footerLegalLinks = [
  ["Terms of Service", "/terms"],
  ["Privacy Policy", "/privacy"],

] as const;

export default function HomeFooter() {
  return (
    <footer className="bg-mist-950 px-5 pt-12 pb-6 text-white sm:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-x-10 gap-y-8 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-x-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/lestow-logo.svg"
              alt="Lestow AI Website Builder"
              width={146}
              height={46}
              className="h-[46px] w-[146px] brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/42">
              Build production-ready applications through conversation. Work
              with AI agents that design, develop, and deploy your app from idea
              to launch.
            </p>
          </div>
          <FooterColumn title="Resources" links={footerResourceLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />
        </div>
        <div className="flex flex-col gap-4 pt-5 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Lestow. All rights reserved.
          </p>
          <div className="flex shrink-0 flex-wrap justify-start gap-6 whitespace-nowrap sm:min-w-[280px] sm:justify-end">
            {footerLegalLinks.map(([label, href]) => (
              <Link key={href} href={href} className="leading-5 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-white/90">
        {title}
      </h3>
      <ul className="mt-5 space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="block text-sm font-medium leading-6 text-white/38 transition hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
