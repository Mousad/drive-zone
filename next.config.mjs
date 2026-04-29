import userConfigImport from './next.user-config.mjs'

export default async function v0NextConfig() {
  const userConfig = userConfigImport

  return {
    ...userConfig,
    distDir: '.next',

    images: {
      ...userConfig.images,
      unoptimized: true,
    },
  }
}