/**
 * Builds a URL with a Text Fragment (#:~:text=...) to deep-link to
 * a specific passage within the target page.
 *
 * Uses the fragmentText (verified to exist on the page) if available,
 * otherwise falls back to the base URL without a fragment.
 */
export function buildTextFragmentUrl(
  baseUrl: string,
  fragmentText: string | undefined
): string {
  if (!fragmentText) return baseUrl;

  // Strip characters that break browser text fragment matching
  const cleaned = fragmentText.replace(/[-+%()[\]{}#]/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return baseUrl;

  const encoded = encodeURIComponent(cleaned);

  // Don't add fragment if URL already has one
  const hashIndex = baseUrl.indexOf("#");
  const cleanUrl = hashIndex >= 0 ? baseUrl.slice(0, hashIndex) : baseUrl;

  return `${cleanUrl}#:~:text=${encoded}`;
}
