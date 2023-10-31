import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jsdom'
}

export default config
