import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-serif text-lg text-navy-900">About</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              The PLIG Framework proposes a causal pathway linking
              pericyte/lysosomal dysfunction to neurodegeneration through iron
              dysregulation and lipid peroxidation.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg text-navy-900">Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>
                <a
                  href="#framework"
                  className="transition-colors hover:text-navy-900"
                >
                  Framework
                </a>
              </li>
              <li>
                <a
                  href="#evidence"
                  className="transition-colors hover:text-navy-900"
                >
                  Evidence
                </a>
              </li>
              <li>
                <a
                  href="#kinetics"
                  className="transition-colors hover:text-navy-900"
                >
                  Kinetics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-lg text-navy-900">Citation</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Companion paper forthcoming on Zenodo. Check back for citation
              details.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-xs text-text-muted">
          PLIG Framework. For research and educational purposes.
        </div>
      </Container>
    </footer>
  );
}
