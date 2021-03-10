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
export const UrlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
export const ExtensionIdRegex = /^[a-p]{32}$/;
export const ForceInstallEntryRegex = /^[a-p]{32}(;https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))?$/;
export const EdgeStoreUpdateUrl = "https://edge.microsoft.com/extensionwebstorebase/v1/crx";
export const ChromeStoreUpdateUrl = "https://clients2.google.com/service/update2/crx";
