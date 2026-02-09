import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-serif text-lg text-white">About</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              FELINE names the five systems that protect the brain from iron:
              homeostasis, lysosomal defenses, insulation barriers,
              neurovascular integrity, and export pathways.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg text-white">Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <a
                  href="#biology"
                  className="transition-colors hover:text-teal-400"
                >
                  Biology
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
                  href="#kinetics"
                  className="transition-colors hover:text-teal-400"
                >
                  Kinetics
                </a>
              </li>
            </ul>
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
          FELINE. For research and educational purposes.
        </div>
      </Container>
    </footer>
  );
}
