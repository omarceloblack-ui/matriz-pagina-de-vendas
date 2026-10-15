import fs from 'node:fs/promises'
import ts from 'typescript'

// Execute only the project's own data modules, using the same TypeScript as the build.
export async function readConfig(file, name) {
  const source = await fs.readFile(`src/config/${file}.ts`, 'utf8')
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
  return (await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`))[name]
}
