import Link from "next/link";

const researchLinks = [
  { label: "Research Areas", href: "/blockchain" },
  { label: "Publications", href: "/publications" },
  { label: "Patents", href: "/ceo" },
  { label: "Case Studies", href: "/projects" },
];

const resources = [
  { label: "Whitepapers", href: "/publications" },
  { label: "Documentation", href: "/links" },
  { label: "News & Events", href: "/links" },
  { label: "Careers", href: "/contact" },
];

export default function ResearchFooterPanel() {
  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5f57]">Research Links</p>
          <div className="mt-3 space-y-2">
            {researchLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block text-sm text-[#bdd0ee] transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5f57]">Resources</p>
          <div className="mt-3 space-y-2">
            {resources.map((item) => (
              <Link key={item.label} href={item.href} className="block text-sm text-[#bdd0ee] transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5f57]">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-[#bdd0ee]">
            <p>Tokyo | San Jose | Karachi</p>
            <p>+81-3-6459-4611</p>
            <p>+92-21-34153105</p>
            <p>info@dtsinc.jp</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5f57]">Newsletter</p>
          <p className="mt-3 text-sm leading-7 text-[#bdd0ee]">
            Subscribe for latest research updates and blockchain optimization insights.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-lg border border-white/15 bg-[#0a1634]">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-[#7f93b8] outline-none"
            />
            <button type="button" className="h-11 bg-[#cc2e26] px-4 text-sm font-semibold text-white">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
