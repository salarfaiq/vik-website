export default function Footer() {
  return (
    <footer className="border-t border-[var(--vik-border-storm)] bg-[var(--vik-storm-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--vik-storm)] to-[var(--vik-storm-deep)] border border-[var(--vik-ember)]/30 flex items-center justify-center">
                <span className="text-[var(--vik-ember)] font-bold text-xs">▲</span>
              </div>
              <span className="text-xl font-bold text-gradient-ember">VIKurdistan</span>
            </div>
            <p className="text-sm text-[var(--foreground)]/40 max-w-sm leading-relaxed">
              Visit Iraqi Kurdistan. Since 2012, connecting adventurers with
              the heart of the Zagros Mountains.
            </p>
          </div>

          {/* Adventures links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--vik-ember)] mb-3">Adventures</h4>
            <ul className="space-y-2">
              {[
                { href: "#zagros", label: "Zagros Mountain Trail" },
                { href: "#halgurd", label: "Halgurd Expeditions" },
                { href: "#destinations", label: "Gomi Felaw Lake" },
                { href: "#stays", label: "Mountain Glamping" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[var(--foreground)]/40 hover:text-[var(--vik-ember)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--vik-ember)] mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com/vikurdistan" target="_blank" className="text-sm text-[var(--foreground)]/40 hover:text-[var(--vik-ember)] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/vikurdistan" target="_blank" className="text-sm text-[var(--foreground)]/40 hover:text-[var(--vik-ember)] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@vikurdistan" target="_blank" className="text-sm text-[var(--foreground)]/40 hover:text-[var(--vik-ember)] transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto:info@visitiraqikurdistan.com" className="text-sm text-[var(--foreground)]/40 hover:text-[var(--vik-ember)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="zagros-divider mt-8 mb-4" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--foreground)]/30">
            &copy; {new Date().getFullYear()} VIKurdistan. All rights reserved.
          </p>
          <p className="text-xs text-[var(--foreground)]/20">
            Bahrka Road, Erbil, Iraq
          </p>
        </div>
      </div>
    </footer>
  );
}
