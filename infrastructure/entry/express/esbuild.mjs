import esbuild from 'esbuild'
import zl from 'zip-lib'

const outFile = './infrastructure/entry/express/dist'
const lambdaFile = './infrastructure/entry/express/lambda.js'

await esbuild.build({
  entryPoints: [lambdaFile],
  bundle: true,
  minify: true,
  outfile: `${outFile}/index.js`,
  platform: 'node',
  format: 'cjs',
  target: 'es2022'
})

await zl.archiveFile(`${outFile}/index.js`, `${outFile}/bundle.zip`)
