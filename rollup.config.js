import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: [Object.keys(pkg.peerDependencies)],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      sizeSnapshot(),
      terser(), // minifies generated bundles
    ],
  },
]
