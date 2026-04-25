import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blockchain", href: "/blockchain" },
  { label: "Publications", href: "/publications" },
  { label: "Contact Us", href: "/contact" },
  { label: "CEO", href: "/ceo" },
];

const categories = [
  { label: "Journal Papers", href: "/publications" },
  { label: "IEEE Conferences", href: "/publications" },
  { label: "Invited Papers", href: "/publications" },
  { label: "Domestic Papers", href: "/publications" },
  { label: "Awards", href: "/publications" },
];

const socialLinks = [
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Twitter", short: "x", href: "#" },
  { label: "YouTube", short: "yt", href: "#" },
  { label: "Email", short: "@", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-12 overflow-hidden border-t border-white/10 bg-[#020a1c]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(26,82,232,0.16)_0%,rgba(3,11,31,0.22)_40%,rgba(204,46,38,0.14)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(204,46,38,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,82,232,0.07)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40" />

      <div className="mx-auto grid w-[90%] max-w-[1600px] gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="relative z-10">
          <Image
            src="/assets/dts%20logo.png"
            alt="DTS Inc logo"
            width={175}
            height={72}
          />
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#b8c7e6]">
            Driving innovation through AI, Blockchain and Semantic
            Technologies for a better and smarter future.
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map(({ label, short, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-[#c6d4ec] transition hover:border-[#cc2e26]/60 hover:shadow-[0_0_12px_rgba(204,46,38,0.4)] hover:text-white"
              >
                <span className="text-xs font-semibold uppercase tracking-wide">{short}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <div className="mt-4 grid gap-2.5 text-sm text-[#c6d4ec]">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="text-white/45">›</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <h4 className="text-xl font-semibold text-white">Categories</h4>
          <div className="mt-4 grid gap-2.5 text-sm text-[#c6d4ec]">
            {categories.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="text-white/45">›</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <h4 className="text-xl font-semibold text-white">Newsletter</h4>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#b8c7e6]">
            Subscribe to get the latest research updates and publications.
          </p>
          <form className="mt-4 flex max-w-sm overflow-hidden rounded-lg border border-white/15 bg-white/[0.03]">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-[#8fa3c7] outline-none"
            />
            <button
              type="button"
              className="h-11 whitespace-nowrap bg-[#cc2e26] px-4 text-sm font-semibold text-white transition hover:bg-[#e8403a] hover:shadow-[0_0_18px_rgba(204,46,38,0.5)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col items-start justify-between gap-3 py-5 text-sm text-[#94a9ce] md:flex-row md:items-center">
          <p>© 2025 DTS Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
