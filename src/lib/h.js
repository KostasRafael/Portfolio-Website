/**
 * Minimal element factory used by every component.
 *
 *   h('a', { class: 'link', href: '/' }, 'Home', h('span', {}, '!'))
 *
 * Strings become text nodes (never parsed as HTML), arrays are flattened,
 * and null / false children or attributes are skipped.
 */
export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag)

  for (const [key, value] of Object.entries(props ?? {})) {
    if (value == null || value === false) continue
    if (key === 'class') el.className = value
    else el.setAttribute(key, value === true ? '' : value)
  }

  el.append(...children.flat(Infinity).filter((child) => child != null && child !== false))
  return el
}

/** Joins class names, dropping empty values. */
export function cx(...names) {
  return names.filter(Boolean).join(' ')
}
