import Link from 'next/link';

const groups = [
  {
    title: 'Produto',
    links: [
      { label: 'Como funciona', href: '/' },
      { label: 'Agendar horário', href: '/agendar' },
      { label: 'Para donos', href: '/login' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de uso', href: '#' },
      { label: 'Privacidade', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

function SocialIcon({
  href,
  label,
  d,
}: {
  href: string;
  label: string;
  d: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid size-8 place-items-center rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
        aria-hidden
      >
        <path d={d} />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-zinc-950 text-zinc-300 bg-grain bg-grain-dark relative">
      <div className="relative mx-auto max-w-6xl px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-50 font-medium tracking-tight"
          >
            Lâmina
          </Link>
          <p className="font-display text-2xl text-zinc-200 leading-snug tracking-tight">
            Marcar horário tão fácil quanto{' '}
            <span className="font-display-italic text-zinc-400">
              mandar uma mensagem.
            </span>
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title} className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500">
              {g.title}
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-zinc-300 hover:text-zinc-50 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} Lâmina. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-1">
            <SocialIcon
              href="#"
              label="X (Twitter)"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
            <SocialIcon
              href="#"
              label="Instagram"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0 1.838c-3.15 0-3.504.011-4.74.067-.95.043-1.461.2-1.803.331-.453.176-.776.385-1.116.726-.34.34-.55.663-.726 1.116-.131.342-.288.853-.331 1.803-.056 1.236-.067 1.59-.067 4.74s.011 3.504.067 4.74c.043.95.2 1.461.331 1.803.176.453.385.776.726 1.116.34.34.663.55 1.116.726.342.131.853.288 1.803.331 1.236.056 1.59.067 4.74.067s3.504-.011 4.74-.067c.95-.043 1.461-.2 1.803-.331.453-.176.776-.385 1.116-.726.34-.34.55-.663.726-1.116.131-.342.288-.853.331-1.803.056-1.236.067-1.59.067-4.74s-.011-3.504-.067-4.74c-.043-.95-.2-1.461-.331-1.803-.176-.453-.385-.776-.726-1.116-.34-.34-.663-.55-1.116-.726-.342-.131-.853-.288-1.803-.331-1.236-.056-1.59-.067-4.74-.067zm0 3.131a4.868 4.868 0 110 9.736 4.868 4.868 0 010-9.736zm0 8.03a3.162 3.162 0 100-6.325 3.162 3.162 0 000 6.325zm6.198-8.226a1.137 1.137 0 11-2.273 0 1.137 1.137 0 012.273 0z"
            />
            <SocialIcon
              href="#"
              label="LinkedIn"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
