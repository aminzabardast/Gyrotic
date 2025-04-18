// rollup.config.mjs
import typescript from '@rollup/plugin-typescript'
// import dts
import dts from 'rollup-plugin-dts'

export default {
  input: 'src/main.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    dts({
      insertTypesEntry: true,
      respectExternal: true,
      compilerOptions: {
        declaration: true,
        declarationDir: 'dist/types',
        emitDeclarationOnly: true,
        skipLibCheck: true,
      },
    }),
  ],
}
