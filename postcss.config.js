/* eslint-env node */

const { readFileSync } = require('fs')

const mediaBreakPointsCss = readFileSync('src/styles/breakpoints.css')

function fromEntries(entries) {
  return entries.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})
}

/**
 * :root {            {
 *   --sm: 480;         '--sm': '(min-width: 480px)',
 *   --md: 720;   ==>   '--md': '(min-width: 720px)',
 *   --lg: 1024;        '--lg': '(min-width: 1024px)',
 *   --xl: 1280;        '--xl': '(min-width: 1280px)',
 * }                  }
 */
const mediaBreakPoints = fromEntries(
  mediaBreakPointsCss
    .toString('utf-8')
    .split(/}|{/)[1]
    .split(';')
    .map((i) => i.trim())
    .filter(Boolean)
    .map((i) => i.split(/:\s*/))
    .map(([key, value]) => [key, `(min-width: ${value}px)`]),
)

module.exports = {
  plugins: [
    'postcss-100vh-fix',
    'autoprefixer',
    'postcss-nested',
    [
      'postcss-custom-media',
      {
        importFrom: [
          {
            customMedia: mediaBreakPoints,
          },
        ],
      },
    ],
  ],
}
