import Link from "next/link";
import PageShell from "@/components/PageShell";

const externalLinks = [
  { title: "DTS FinTech", href: "https://www.dts-fintech.com/" },
  { title: "DTS AI Trading", href: "http://3.134.5.238:8083/dts_ai/login.php" },
  { title: "DTS Mining Portal", href: "http://3.20.158.33/DTS-Optimizing-portal/" },
  { title: "ETC Pool", href: "http://18.224.148.36:81/#/" },
  { title: "MVTZ About", href: "https://metavtz.com/about-mvtz/" },
  { title: "S Wallet iOS", href: "https://metavtz.com/s-wallet-ios/" },
  {
    title: "IIC Wallet Android",
    href: "https://play.google.com/store/apps/details?id=com.iics.wallet",
  },
  { title: "Web3 Talk", href: "https://www.youtube.com/watch?v=U1O0YiHWrrA" },
];

export default function LinksPage() {
  return (
    <PageShell>
      <section className="py-24">
        <div className="section-shell">
          <p className="text-sm uppercase tracking-[0.2em] text-[#ff6a60]">DTS Links</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Useful Resources</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
            Quick access to wallet products, research channels, and ecosystem websites.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {externalLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/6 px-5 py-4 text-lg font-medium transition hover:border-[#ff5e56] hover:bg-white/10"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/6 p-5 text-sm leading-7 text-[color:var(--muted)]">
            <p>
              For policy and support, visit <Link href="/contact" className="text-[#ff5e56]">Contact</Link>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
