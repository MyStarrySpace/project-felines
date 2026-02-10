import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900" role="contentinfo">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-serif text-lg text-white" id="footer-about">About</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Project FELINE investigates how the brain&apos;s iron defense
              systems fail in neurodegeneration: homeostasis, lysosomal
              defenses, insulation barriers, neurovascular integrity, and
              export pathways.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg text-white" id="footer-links">Links</h3>
            <nav aria-labelledby="footer-links">
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <a
                  href="#findings"
                  className="transition-colors hover:text-teal-400"
                >
                  Findings
                </a>
              </li>
              <li>
                <a
                  href="#evidence"
                  className="transition-colors hover:text-teal-400"
                >
                  Evidence
                </a>
              </li>
              <li>
                <a
                  href="/kinetics"
                  className="transition-colors hover:text-teal-400"
                >
                  Kinetics
                </a>
              </li>
            </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg text-white">Citation</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Companion paper forthcoming on Zenodo. Check back for citation
              details.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-xs text-gray-400">
          Project FELINE. For research and educational purposes.
        </div>
      </Container>
    </footer>
  );
}
