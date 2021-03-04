export const UrlMatchPatternRegex = new RegExp(
  '^' +
    // Scheme; optional.
    '((http|https|\\*)://)?' +
    // Include subdomains specifier; optional.
    '(\\*\\.)?' +
    // Hostname, required.
    '([a-z0-9\\.-]+\\.[a-z0-9]+)' +
    // Port, optional.
    '(:[0-9]+)?' +
    // Path, optional but if present must be '/' or '/*'.
    '(\\/\\*|\\/)?' +
    '$'
);
export const ExtensionVersionRegex = /^[0-9]+([.][0-9]+)*$/;
