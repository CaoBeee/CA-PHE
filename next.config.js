const withImages = require('next-images')
  
module.exports = withImages({
  images: {
    domains: [], // Leave this empty for local images
  },
})