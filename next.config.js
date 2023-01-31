// const withTwin = require('./withTwin.js')

// module.exports = withTwin({
//   reactStrictMode: true,
//   // ...
// })

// const withPlugins = require('next-compose-plugins')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withPlugins([
//   [withBundleAnalyzer],
//   // your other plugins here
// ])

const withTwin = require('./withTwin.js')

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['assets.pazamoryesperanza.com'],
  },
  // ...

  // withBundleAnalyzer,
})
