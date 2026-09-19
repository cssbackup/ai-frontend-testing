import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Privacy Policy", href: "/", title: "Privacy Policy" },
    { name: "Description", href: "/", title: "Description" },
    { name: "Contact Us", href: "/", title: "Contact Us" },
  ];

  return (
    <>
      <footer className="w-full bg-[#141414] text-white">
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-2">
            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} CSS AI Builder
              </p>

              <nav>
                <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        title={link.title}
                        className="text-sm text-[#929292] transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
