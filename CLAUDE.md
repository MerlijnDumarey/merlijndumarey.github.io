# CLAUDE.md

Guidance for Claude Code when working on this repository.

## What this project is

Merlijn Dumarey's personal portfolio site: plain static HTML/CSS/JS, no
build tools, no framework, hosted on GitHub Pages with a custom domain
(see `CNAME`). Pages intentionally duplicate shared markup (header, nav,
footer) rather than using a templating system or bundler — keep it that
way unless explicitly asked to change it.

## Always maintain both Dutch and English versions

The "core" pages of the site are bilingual and must stay that way:

- `index.html` / `en/index.html`
- `about.html` / `en/about.html`
- `blog.html` / `en/blog.html`
- `thesis.html` / `en/thesis.html`

When you add a new core page, or materially edit the content of one of
these, create/update **both** the Dutch (root) and English (`en/`)
version in the same change. Don't leave one language behind.

**Exception, by deliberate choice:** the long-form blog posts in
`posts/*.html` stay Dutch-only. `en/blog.html` links to them with a
"(Dutch)" label rather than translating them — translating the full
posts is a large content-authoring task, not a code change, and was
explicitly deferred. If the user asks to translate a specific post,
that's fine; just don't assume all posts need translating by default.

Path convention: `en/*.html` files sit one directory deeper than their
Dutch counterparts, so their relative links need an extra `../`
(e.g. `en/about.html` links to `../css/main.css`, `../js/theme.js`,
`../thesis/...`, and back to the Dutch page via `../about.html`).

## Always maintain dark and light mode

The site has a persistent light/dark theme toggle (`js/theme.js` +
CSS custom properties in `css/main.css`). Keep it working for any new
or edited page:

- Every page needs `<script src="js/theme.js"></script>` (or
  `../js/theme.js` from one directory deep) in `<head>`, placed right
  after the stylesheet `<link>` so the theme applies before first
  paint, and the `#theme-toggle` button in the header's
  `.header-actions` block.
- **Never hardcode a text or background color** (inline `style="color:
  #..."` or a raw hex value in CSS) for anything that isn't a fixed
  brand color sitting on the header's always-blue background. Use the
  existing CSS custom properties (`--text-color`, `--text-muted`,
  `--text-subtle`, `--text-body`, `--card-bg`, `--bg-color`,
  `--border-color`, `--footer-bg`, `--footer-text`, `--color-primary`,
  etc.) instead.
- If a new color is genuinely needed, add it as a variable in `:root`
  in `css/main.css`, then add its dark-mode value **once** as a
  `--dark-*` variable and reference that same `--dark-*` variable from
  both the `:root[data-theme="dark"]` block and the
  `@media (prefers-color-scheme: dark) { :root:not([data-theme]) {...} }`
  fallback block. Don't duplicate literal hex values across those two
  blocks — that's how a past contrast bug happened
  (`--color-primary` was missed in the dark palette and became
  unreadable against dark backgrounds).
- Before considering a visual change done, mentally (or actually) check
  it against both themes, not just light mode.

## Other conventions worth knowing

- The header (logo, `.nav-menu` with Home/Blog/Over Mij/Thesis, the
  language dropdown, the theme toggle) is duplicated byte-for-byte
  across every page. If you add a new nav item or header control, add
  it consistently everywhere: `index.html`, `about.html`, `blog.html`,
  `thesis.html`, `post-template.html`, every `posts/*.html`, and every
  `en/*.html` (skip the language dropdown on `posts/*.html` and
  `post-template.html` — those have no English counterpart).
- `post-template.html` lives at the repo root for convenience but is
  written as if it already sits inside `posts/` (uses `../` paths)
  because the existing workflow is to copy it into `posts/` when
  authoring a new post.
- The language switcher is a native `<details class="lang-dropdown">`
  / `<summary class="lang-dropdown-toggle">` element — no JS required
  for the open/close behavior. Follow that same pattern for the two
  language options: the current language as a non-clickable
  `<span class="lang-option lang-option-active">`, the other language
  as a clickable `<a class="lang-option">`.
- No build step exists. When making the same small edit across many
  files (e.g. adding a nav item everywhere), a short one-off Python
  script doing a verified string replacement per file is fine — just
  watch out for CRLF line endings (this repo uses CRLF; writing files
  with plain `\n` will silently convert them to LF and blow up the
  diff).
