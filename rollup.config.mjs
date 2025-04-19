import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'

export default [
  // JS build
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/gyrotic.mjs',
        format: 'module',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  // CommonJS build
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/gyrotic.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  // Minified JS build
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/gyrotic.min.js',
        format: 'umd',
        name: 'Gyrotic',
        sourcemap: true,
      },
    ],
    plugins: [typescript(), terser()],
  },
  // Type declarations build
  {
    input: 'src/main.ts',
    output: [{ file: 'dist/gyrotic.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
