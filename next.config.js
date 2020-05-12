const withImages = require('next-images')

module.exports = withImages({
  distDir: 'dist/.next',
  useFileSystemPublicRoutes: true
})
