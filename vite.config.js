import { defineConfig, transformWithEsbuild } from 'vite'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'd3-geo': 'd3',
  'd3-zoom': 'd3',
  'd3-selection': 'd3',
  'topojson-client': 'topojson',
  'prop-types': 'PropTypes',
}

const transformJsAsJsx = {
  name: 'transform-js-as-jsx',
  enforce: 'pre',
  transform(code, id) {
    if (!/\/src\/.*\.js$/.test(id)) return null

    return transformWithEsbuild(code, id, {
      loader: 'jsx',
      jsx: 'transform',
    })
  },
}

export default defineConfig({
  plugins: [transformJsAsJsx],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'reactSimpleMaps',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.es.js'
        if (format === 'cjs') return 'index.js'
        return 'index.umd.js'
      },
    },
    rollupOptions: {
      external,
      output: {
        globals,
      },
    },
  },
})
