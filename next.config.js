// const withTwin = require('./withTwin.js')

// module.exports = withTwin({
//   reactStrictMode: true,
//   // ...
// })

const withTwin = require('./withTwin.js')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = withTwin({
  reactStrictMode: true,

  // ...

  // withBundleAnalyzer,
})
